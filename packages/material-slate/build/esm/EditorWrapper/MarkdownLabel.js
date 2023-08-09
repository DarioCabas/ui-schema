function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import makeStyles from "@mui/styles/makeStyles";
import { Trans } from '@ui-schema/ui-schema/Translate/Trans';
const MarkdownIcon = React.forwardRef(({
  color
}, ref) => React.createElement("svg", {
  viewBox: "0 0 16 16",
  fill: color,
  style: {
    width: '20px',
    display: 'block',
    opacity: 0.6
  },
  ref: ref
}, React.createElement("g", {
  transform: "translate(-71.09-24.1)"
}, React.createElement("path", {
  d: "m10.509 2.01c-5.82 0-10.509 4.689-10.509 10.509v102.96c0 5.82 4.689 10.509 10.509 10.509h186.98c5.82 0 10.509-4.689 10.509-10.509v-102.96c0-5.82-4.689-10.509-10.509-10.509h-186.98m15.764 26.27h20.992l21.02 26.27 21.02-26.27h20.992v71.43h-20.992v-40.971l-21.02 26.27-21.02-26.27v40.971h-20.992v-71.43m120.8 0h20.992v36.756h21.02l-31.501 34.676-31.528-34.676h21.02v-36.756",
  stroke: "none",
  transform: "matrix(.06731 0 0 .06731 72.08 27.814)"
}))));
const MarkdownLink = React.forwardRef((props, ref) => React.createElement("a", _extends({
  target: "_blank",
  rel: "noopener noreferrer"
}, props, {
  ref: ref
})));
const useMarkdownStyles = makeStyles(theme => ({
  markdown: {
    position: 'absolute',
    top: ({
      top
    }) => theme.spacing(top),
    right: '4px',
    zIndex: 1
  },
  markdownLabel: {
    position: 'absolute',
    right: 0,
    bottom: '-50%',
    whiteSpace: 'pre'
  }
}));
let MarkdownLabel = ({
  href,
  parentFocused,
  enableKeyboard,
  top = 0
}) => {
  const classes = useMarkdownStyles({
    top
  });
  const [focus, setFocus] = React.useState(false);
  return React.createElement("div", {
    className: classes.markdown
  }, React.createElement(IconButton, {
    component: MarkdownLink,
    href: href || 'https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet',
    style: {
      position: 'relative'
    },
    tabIndex: enableKeyboard ? undefined : -1,
    color: parentFocused ? 'primary' : 'inherit',
    onMouseEnter: () => setFocus(true),
    onMouseLeave: () => setFocus(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    size: 'small'
  }, React.createElement(MarkdownIcon, {
    color: 'currentColor'
  }), focus ? React.createElement(Typography, {
    component: 'span',
    variant: 'caption',
    className: classes.markdownLabel
  }, React.createElement(Trans, {
    text: 'labels.rich-text-enabled-markdown'
  })) : null));
};
MarkdownLabel = React.memo(MarkdownLabel);
export { MarkdownLabel };