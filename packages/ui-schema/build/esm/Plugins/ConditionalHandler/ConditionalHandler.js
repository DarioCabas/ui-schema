function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { NextPluginRendererMemo } from '@ui-schema/ui-schema/PluginStack';
import { handleIfElseThen } from './handleIfElseThen';
export const ConditionalHandler = props => {
  let {
    schema,
    value
  } = props;
  const keyIf = schema.get('if');
  if (keyIf) {
    schema = handleIfElseThen(schema, value, schema);
  }
  return React.createElement(NextPluginRendererMemo, _extends({}, props, {
    schema: schema
  }));
};