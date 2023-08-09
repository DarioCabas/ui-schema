function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import clsx from 'clsx';
export const LeafMapper = ({
  attributes,
  children,
  leaf
}) => {
  const Comp = leaf.code ? 'code' : 'span';
  return React.createElement(Comp, _extends({}, attributes, {
    className: clsx([leaf.strikethrough && 'slate-strikethrough', leaf.code && 'slate-code', leaf.superscript && 'slate-superscript', leaf.subscript && 'slate-subscript'])
  }), children);
};