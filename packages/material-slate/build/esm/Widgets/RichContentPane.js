function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { extractValue, memo } from '@ui-schema/ui-schema';
import { SlateRenderer } from '@ui-schema/material-slate/Slate/SlateRenderer';
import { ElementMapper } from '@ui-schema/material-slate/SlateElements/ElementMapper';
import { PaneWrapper, usePaneEditorStyles } from '@ui-schema/material-slate/EditorWrapper/PaneWrapper';
import { useSlate } from '@ui-schema/material-slate/Slate/useSlate';
import { slatePlugins, withPlugins } from '@ui-schema/material-slate/Slate/slatePlugins';
const RichContentPaneBase = props => {
  const {
    value,
    schema,
    storeKeys,
    errors,
    showValidity,
    valid
  } = props;
  const {
    dense,
    focused,
    empty,
    onFocus,
    onBlur
  } = useSlate(schema, value);
  const classes = usePaneEditorStyles({
    dense: dense,
    focused
  });
  return React.createElement(PaneWrapper, {
    storeKeys: storeKeys,
    schema: schema,
    dense: dense,
    focused: focused,
    empty: empty,
    errors: errors,
    showValidity: showValidity,
    valid: valid,
    classes: classes
  }, React.createElement(SlateRenderer, _extends({}, props, {
    ElementMapper: ElementMapper,
    plugins: slatePlugins,
    withPlugins: withPlugins,
    onFocus: onFocus,
    onBlur: onBlur
  })));
};
export const RichContentPane = extractValue(memo(RichContentPaneBase));