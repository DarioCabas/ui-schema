import React from 'react';
import { Map } from 'immutable';
import { createOrderedMap } from '@ui-schema/ui-schema/Utils/createMap';
export const PROGRESS_NONE = false;
export const PROGRESS_START = 'start';
export const PROGRESS_DONE = true;
export const PROGRESS_ERROR = 'error';
export function useProgress() {
  return React.useState(PROGRESS_NONE);
}
export const UIApiContext = React.createContext({});
export const useUIApi = () => React.useContext(UIApiContext);
export const schemaLocalCachePath = 'uischema-cache' + (typeof window === 'undefined' ? 0 : window.location.port);
const initialState = ({
  noCache = false
}) => {
  let cached;
  if (!noCache) {
    var _window, _window$localStorage;
    const cachedRaw = (_window = window) === null || _window === void 0 ? void 0 : (_window$localStorage = _window.localStorage) === null || _window$localStorage === void 0 ? void 0 : _window$localStorage.getItem(schemaLocalCachePath);
    if (cachedRaw) {
      try {
        cached = JSON.parse(cachedRaw);
      } catch (e) {
        if (process.env.NODE_ENV === 'development') {
          console.error('invalid localStorage schema cache', e);
        }
      }
    }
  }
  return Map({
    schemas: cached ? createOrderedMap(cached) : Map()
  });
};
function reducer(state, action = {}) {
  if (action.type === 'SCHEMA_LOADED') {
    return (() => {
      let tmpState = state.setIn(['schemas', action.id], createOrderedMap(action.value));
      if (!action.noCache) {
        var _window2, _window2$localStorage;
        (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$localStorage = _window2.localStorage) === null || _window2$localStorage === void 0 ? void 0 : _window2$localStorage.setItem(schemaLocalCachePath, JSON.stringify(tmpState.get('schemas').toJS()));
      }
      return tmpState;
    })();
  }
  return state;
}
const schemasLoaded = {
  schemas: {}
};
export const isLoaded = (schemas, ref, version) => {
  return !ref ? false : ref && (schemas === null || schemas === void 0 ? void 0 : schemas.get(ref)) && (version && (schemas === null || schemas === void 0 ? void 0 : schemas.getIn([ref, 'version'])) === version || (schemas === null || schemas === void 0 ? void 0 : schemas.getIn([ref, 'version'])) === '*' || !(schemas !== null && schemas !== void 0 && schemas.getIn([ref, 'version'])));
};
export const UIApiProvider = ({
  loadSchema,
  noCache,
  children
}) => {
  const [state, dispatch] = React.useReducer(reducer, {
    noCache
  }, initialState);
  const loadSchemaFn = React.useCallback(url => {
    if (schemasLoaded.schemas[url] === PROGRESS_START || schemasLoaded.schemas[url] === PROGRESS_DONE) return Promise.resolve(schemasLoaded.schemas[url]);
    schemasLoaded.schemas[url] = PROGRESS_START;
    return loadSchema(url).then(loadedSchema => {
      schemasLoaded.schemas[url] = PROGRESS_DONE;
      dispatch({
        type: 'SCHEMA_LOADED',
        id: url,
        value: loadedSchema,
        noCache: noCache
      });
      return PROGRESS_DONE;
    }).catch(() => {
      schemasLoaded.schemas[url] = PROGRESS_ERROR;
      return PROGRESS_ERROR;
    });
  }, [loadSchema, noCache]);
  const contextValue = React.useMemo(() => ({
    schemas: state.get('schemas'),
    loadSchema: loadSchemaFn
  }), [state, loadSchemaFn]);
  return React.createElement(UIApiContext.Provider, {
    value: contextValue
  }, children);
};