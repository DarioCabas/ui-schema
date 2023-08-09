import React from 'react';
import makeStyles from "@mui/styles/makeStyles";
import { ValidityHelperText } from '@ui-schema/ds-material';
import { MarkdownLabel } from '@ui-schema/material-slate/EditorWrapper/MarkdownLabel';
export const usePaneEditorStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    position: 'relative'
  },
  editor: {
    position: 'relative',
    minHeight: theme.spacing(5),
    '& .slate-HeadingToolbar': {
      borderBottom: 0,
      margin: 0,
      padding: "".concat(theme.spacing(0.5), " ").concat(theme.spacing(1)),
      justifyContent: 'center'
    }
  }
}));
export const PaneWrapper = ({
  schema,
  errors,
  showValidity,
  children,
  focused,
  classes
}) => {
  const hideMd = schema.getIn(['view', 'hideMd']);
  return React.createElement("div", {
    className: classes.wrapper
  }, !hideMd ? React.createElement(MarkdownLabel, {
    href: schema.getIn(['view', 'linkMd']),
    enableKeyboard: schema.getIn(['view', 'enableKeyMd']),
    parentFocused: focused,
    top: 1
  }) : null, React.createElement("div", {
    className: classes.editor
  }, children), React.createElement(ValidityHelperText, {
    errors: errors,
    showValidity: showValidity,
    schema: schema
  }));
};