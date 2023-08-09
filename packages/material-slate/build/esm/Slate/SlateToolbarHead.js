function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import IcAlignCenter from '@mui/icons-material/FormatAlignCenter';
import IcAlignLeft from '@mui/icons-material/FormatAlignLeft';
import IcAlignRight from '@mui/icons-material/FormatAlignRight';
import IcAlignJustify from '@mui/icons-material/FormatAlignJustify';
import IcCode from '@mui/icons-material/Code';
import IcQuote from '@mui/icons-material/FormatQuote';
import IcListNumbered from '@mui/icons-material/FormatListNumbered';
import IcListBulleted from '@mui/icons-material/FormatListBulleted';
import IcListTodo from '@mui/icons-material/BallotOutlined';
import { HeadingToolbar } from '@udecode/slate-plugins';
import { pluginOptions } from '@ui-schema/material-slate/Slate/pluginOptions';
import { ToolbarAlign, ToolbarCodeBlock, ToolbarElement, ToolbarList } from '@ui-schema/material-slate/Slate/SlateToolbarButtons';
import { editorIsEnabled } from '@ui-schema/material-slate/Slate/editorIsEnabled';
export const SlateToolbarHead = ({
  enableOnly,
  onlyInline,
  onBlur,
  onFocus
}) => {
  return React.createElement(HeadingToolbar, null, !onlyInline && editorIsEnabled(enableOnly, pluginOptions.ul.type) && React.createElement(ToolbarList, _extends({}, pluginOptions, {
    type: pluginOptions.ul.type,
    icon: React.createElement(IcListBulleted, null),
    onFocus: onFocus,
    onBlur: onBlur
  })), !onlyInline && editorIsEnabled(enableOnly, pluginOptions.ol.type) && React.createElement(ToolbarList, _extends({}, pluginOptions, {
    type: pluginOptions.ol.type,
    icon: React.createElement(IcListNumbered, null),
    onFocus: onFocus,
    onBlur: onBlur
  })), !onlyInline && editorIsEnabled(enableOnly, pluginOptions.todo_li.type) && React.createElement(ToolbarElement, {
    type: pluginOptions.todo_li.type,
    icon: React.createElement(IcListTodo, null),
    onFocus: onFocus,
    onBlur: onBlur
  }), !onlyInline && editorIsEnabled(enableOnly, pluginOptions.blockquote.type) && React.createElement(ToolbarElement, {
    type: pluginOptions.blockquote.type,
    icon: React.createElement(IcQuote, null),
    onFocus: onFocus,
    onBlur: onBlur
  }), !onlyInline && editorIsEnabled(enableOnly, pluginOptions.code_block.type) && React.createElement(ToolbarCodeBlock, {
    type: pluginOptions.code_block.type,
    icon: React.createElement(IcCode, null),
    options: pluginOptions,
    onFocus: onFocus,
    onBlur: onBlur
  }), editorIsEnabled(enableOnly, pluginOptions.align_center.type) || editorIsEnabled(enableOnly, pluginOptions.align_right.type) || editorIsEnabled(enableOnly, pluginOptions.align_justify.type) ? React.createElement(ToolbarAlign, {
    icon: React.createElement(IcAlignLeft, null),
    type: '',
    onFocus: onFocus,
    onBlur: onBlur
  }) : null, editorIsEnabled(enableOnly, pluginOptions.align_center.type) && React.createElement(ToolbarAlign, {
    type: pluginOptions.align_center.type,
    icon: React.createElement(IcAlignCenter, null),
    onFocus: onFocus,
    onBlur: onBlur
  }), editorIsEnabled(enableOnly, pluginOptions.align_right.type) && React.createElement(ToolbarAlign, {
    type: pluginOptions.align_right.type,
    icon: React.createElement(IcAlignRight, null),
    onFocus: onFocus,
    onBlur: onBlur
  }), editorIsEnabled(enableOnly, pluginOptions.align_justify.type) && React.createElement(ToolbarAlign, {
    type: pluginOptions.align_justify.type,
    icon: React.createElement(IcAlignJustify, null),
    onFocus: onFocus,
    onBlur: onBlur
  }));
};