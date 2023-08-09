function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { pluginOptions } from '@ui-schema/material-slate/Slate/pluginOptions';
import React from 'react';
export const mappingAlign = {
  [pluginOptions.align_center.type]: ({
    attributes,
    children
  }) => React.createElement("div", _extends({}, attributes, {
    style: {
      textAlign: 'center'
    }
  }), children),
  [pluginOptions.align_right.type]: ({
    attributes,
    children
  }) => React.createElement("div", _extends({}, attributes, {
    style: {
      textAlign: 'right'
    }
  }), children),
  [pluginOptions.align_justify.type]: ({
    attributes,
    children
  }) => React.createElement("div", _extends({}, attributes, {
    style: {
      textAlign: 'justify',
      whiteSpace: 'normal'
    }
  }), children)
};