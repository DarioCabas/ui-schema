function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { pluginOptions } from '@ui-schema/material-slate/Slate/pluginOptions';
import Typography from '@mui/material/Typography';
import makeStyles from "@mui/styles/makeStyles";
const useStyles = makeStyles(theme => ({
  quote: {
    padding: theme.spacing(1) + ' ' + theme.spacing(2) + ' ' + theme.spacing(0.5) + ' ' + theme.spacing(2),
    position: 'relative',
    borderLeft: '0 solid ' + theme.palette.divider,
    '&:before': {
      content: '"“"',
      fontSize: '4em',
      position: 'relative',
      left: -theme.spacing(1),
      lineHeight: 0,
      verticalAlign: 'bottom',
      pointerEvents: 'none'
    }
  }
}));
export const mappingBasic = {
  [pluginOptions.h1.type]: ({
    attributes,
    children
  }) => React.createElement(Typography, _extends({
    variant: 'h1',
    component: 'h1'
  }, attributes, {
    style: {
      fontSize: '2.7rem'
    },
    gutterBottom: true
  }), children),
  [pluginOptions.h2.type]: ({
    attributes,
    children
  }) => React.createElement(Typography, _extends({
    variant: 'h2',
    component: 'h2'
  }, attributes, {
    style: {
      fontSize: '2.3rem'
    },
    gutterBottom: true
  }), children),
  [pluginOptions.h3.type]: ({
    attributes,
    children
  }) => React.createElement(Typography, _extends({
    variant: 'h3',
    component: 'h3'
  }, attributes, {
    style: {
      fontSize: '2.1rem'
    },
    gutterBottom: true
  }), children),
  [pluginOptions.h4.type]: ({
    attributes,
    children
  }) => React.createElement(Typography, _extends({
    variant: 'h4',
    component: 'h4'
  }, attributes, {
    style: {
      fontSize: '1.75rem'
    },
    gutterBottom: true
  }), children),
  [pluginOptions.h5.type]: ({
    attributes,
    children
  }) => React.createElement(Typography, _extends({
    variant: 'h5',
    component: 'h5'
  }, attributes, {
    style: {
      fontSize: '1.5rem'
    },
    gutterBottom: true
  }), children),
  [pluginOptions.h6.type]: ({
    attributes,
    children
  }) => React.createElement(Typography, _extends({
    variant: 'h6',
    component: 'h6'
  }, attributes, {
    style: {
      fontSize: '1.25rem'
    },
    gutterBottom: true
  }), children),
  [pluginOptions.p.type]: ({
    attributes,
    children
  }) => React.createElement(Typography, _extends({
    variant: 'body1',
    component: 'p'
  }, attributes, {
    style: {
      lineHeight: 'normal'
    },
    gutterBottom: true
  }), children),
  [pluginOptions.blockquote.type]: ({
    attributes,
    children
  }) => {
    const classes = useStyles();
    return React.createElement(Typography, _extends({
      variant: 'body1',
      component: 'blockquote'
    }, attributes, {
      className: classes.quote,
      gutterBottom: true
    }), children);
  },
  [pluginOptions.code_block.type]: ({
    attributes,
    children
  }) => React.createElement("pre", attributes, React.createElement("code", null, children))
};