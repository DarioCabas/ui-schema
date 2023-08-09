import React from 'react';
import ReactEditorJs from 'react-editor-js';
import { extractValue } from '@ui-schema/ui-schema/UIStore';
import { List, Map } from 'immutable';
import { fromJSOrdered } from '@ui-schema/ui-schema/Utils/createMap/createMap';
const EditorJSBase = ({
  uid,
  onFocus,
  onBlur,
  onReady,
  ready,
  onChange,
  storeKeys,
  required,
  value,
  internalValue,
  onEmptyChange,
  tools
}) => {
  var _value$get;
  const editorRef = React.useRef();
  const currentState = React.useRef(undefined);
  const onChangeEditor = React.useCallback((_api, newData) => {
    var _currentState$current, _currentState$current2;
    const newValue = fromJSOrdered(newData);
    if (!((_currentState$current = currentState.current) !== null && _currentState$current !== void 0 && (_currentState$current2 = _currentState$current.get('blocks')) !== null && _currentState$current2 !== void 0 && _currentState$current2.equals(newValue === null || newValue === void 0 ? void 0 : newValue.get('blocks')))) {
      onChange({
        storeKeys,
        scopes: ['value', 'internal'],
        type: 'update',
        updater: ({
          internal: currentInternal = Map()
        }) => {
          var _currentState$current3, _currentState$current4;
          currentState.current = newValue;
          return {
            value: currentState.current,
            internal: currentInternal.set('isEmpty', Boolean(!(((_currentState$current3 = currentState.current) === null || _currentState$current3 === void 0 ? void 0 : (_currentState$current4 = _currentState$current3.get('blocks')) === null || _currentState$current4 === void 0 ? void 0 : _currentState$current4.size) > 0)))
          };
        },
        schema: Map({
          type: 'object'
        }),
        required
      });
    }
  }, [onChange, storeKeys, required, currentState]);
  const isEmpty = internalValue.get('isEmpty') || !((value === null || value === void 0 ? void 0 : (_value$get = value.get('blocks')) === null || _value$get === void 0 ? void 0 : _value$get.size) > 0);
  React.useEffect(() => {
    var _currentState$current5, _currentState$current6, _currentState$current7;
    if (ready && editorRef.current && (value && !((_currentState$current5 = currentState.current) !== null && _currentState$current5 !== void 0 && (_currentState$current6 = _currentState$current5.get('blocks')) !== null && _currentState$current6 !== void 0 && _currentState$current6.equals(value === null || value === void 0 ? void 0 : value.get('blocks'))) || !value && currentState.current && !((_currentState$current7 = currentState.current) !== null && _currentState$current7 !== void 0 && _currentState$current7.get('blocks').equals(List())))) {
      editorRef.current.clear();
      if (value) {
        currentState.current = value;
        editorRef.current.render(value.toJS());
      } else {
        currentState.current = fromJSOrdered({
          blocks: []
        });
      }
      onChange({
        storeKeys,
        scopes: ['internal'],
        type: 'update',
        updater: ({
          internal: currentInternal = Map()
        }) => {
          var _value$get2;
          return {
            internal: currentInternal.set('isEmpty', Boolean(!((value === null || value === void 0 ? void 0 : (_value$get2 = value.get('blocks')) === null || _value$get2 === void 0 ? void 0 : _value$get2.size) > 0)))
          };
        },
        schema: Map({
          type: 'object'
        }),
        required
      });
    }
  }, [value, ready, editorRef, currentState, isEmpty, onChange, required, storeKeys, onEmptyChange]);
  React.useEffect(() => {
    onEmptyChange(Boolean(typeof isEmpty === 'undefined' ? true : isEmpty));
  }, [isEmpty, onEmptyChange]);
  return React.createElement(ReactEditorJs, {
    data: undefined,
    tools: tools,
    instanceRef: instance => editorRef.current = instance,
    enableReInitialize: false,
    onReady: onReady,
    onChange: onChangeEditor,
    holder: 'uis-' + uid + '-editor',
    minHeight: 0
  }, React.createElement("div", {
    id: 'uis-' + uid + '-editor',
    tabIndex: -1,
    onFocus: onFocus,
    onBlur: onBlur,
    style: {
      visibility: ready ? 'visible' : 'hidden',
      height: ready ? 'auto' : 0
    }
  }));
};
export const EditorJS = extractValue(EditorJSBase);