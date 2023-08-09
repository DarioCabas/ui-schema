import React from 'react';
import { List, Map, Record } from 'immutable';
import { createEmptyStore } from '@ui-schema/ui-schema/UIStore';
import { storeUpdater } from '@ui-schema/ui-schema/storeUpdater';
const defaultDebounceTime = 380;
const defaultUpdateRate = 6;
const defaultMaxItems = 1000;
const UIStoreProRecord = Record({
  activeIndex: 0,
  current: createEmptyStore('object'),
  list: List([createEmptyStore('object')]),
  opts: Map()
});
export class UIStorePro extends UIStoreProRecord {}
export const makeStorePro = (type, initialStore = undefined) => {
  return new UIStorePro({
    activeIndex: 0,
    current: initialStore || createEmptyStore(type),
    list: List([initialStore || createEmptyStore(type)]),
    opts: Map()
  });
};
const initialChangeRater = {
  current: 0,
  last: undefined
};
const defaultStoreOptions = {
  debounceTime: defaultDebounceTime,
  updateRate: defaultUpdateRate,
  initialStore: undefined,
  type: ''
};
export const toHistory = (prevStore, index) => {
  if (index >= 0 && index < prevStore.list.size) {
    return prevStore.set('current', prevStore.list.get(index)).set('activeIndex', index);
  }
  return prevStore;
};
const doingValueSelector = ['opts', 'doingValue'];
export const useStorePro = ({
  debounceTime = defaultDebounceTime,
  updateRate = defaultUpdateRate,
  type = defaultStoreOptions.type,
  initialStore = undefined
} = defaultStoreOptions) => {
  const timer = React.useRef();
  const historyChangeRater = React.useRef(initialChangeRater);
  const historyDebounce = React.useRef([]);
  const [store, setStore] = React.useState(() => makeStorePro(type, initialStore));
  const onChange = React.useCallback(actions => {
    if (!Array.isArray(actions)) {
      actions = [actions];
    }
    const doValue = actions.reduce((doV, action) => doV || action.scopes.indexOf('value') !== -1, false);
    setStore(prevStore => {
      let newStore = prevStore.set('current', storeUpdater(actions)(prevStore.current));
      if (!doValue) {
        if (!newStore.getIn(doingValueSelector)) {
          return newStore.setIn(['list', newStore.activeIndex], newStore.current);
        }
        return newStore;
      }
      newStore = newStore.setIn(doingValueSelector, true);
      historyChangeRater.current.current = historyChangeRater.current.current > defaultMaxItems ? 0 : historyChangeRater.current.current + 1;
      historyChangeRater.current.last = newStore.current.setIn(doingValueSelector, false);
      let historyAdded = false;
      if (historyChangeRater.current.current % updateRate === 0) {
        historyAdded = true;
        historyDebounce.current.push(newStore.current.setIn(doingValueSelector, false));
      }
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        if (!historyAdded && updateRate !== 1 && historyChangeRater.current.last) {
          historyDebounce.current.push(historyChangeRater.current.last);
        }
        if (historyDebounce.current.length === 0) return;
        setStore(prevStore => {
          const activeIndex = prevStore.activeIndex;
          let list = prevStore.list;
          if (activeIndex < list.size - 1) {
            list = list.splice(activeIndex + 1, list.size - activeIndex);
          }
          list = list.push(...historyDebounce.current);
          historyDebounce.current = [];
          historyChangeRater.current = initialChangeRater;
          return prevStore.set('list', list).set('activeIndex', list.size - 1).setIn(doingValueSelector, false);
        });
      }, debounceTime);
      return newStore;
    });
    return () => window.clearTimeout(timer.current);
  }, [setStore, timer, historyDebounce, historyChangeRater, debounceTime, updateRate]);
  const redoHistory = React.useCallback((steps = 1) => {
    setStore(prevStore => {
      const nextIndex = prevStore.activeIndex + steps;
      return toHistory(prevStore, nextIndex);
    });
  }, [setStore]);
  const undoHistory = React.useCallback((steps = 1) => {
    setStore(prevStore => {
      const nextIndex = prevStore.activeIndex - steps;
      return toHistory(prevStore, nextIndex);
    });
  }, [setStore]);
  const reset = React.useCallback((type, initialStore) => {
    window.clearTimeout(timer.current);
    historyDebounce.current = [];
    historyChangeRater.current = initialChangeRater;
    setStore(makeStorePro(type, initialStore));
  }, [timer, historyDebounce, historyChangeRater, setStore]);
  return {
    reset,
    onChange,
    redoHistory,
    undoHistory,
    store: store,
    setStore: setStore
  };
};