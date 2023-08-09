import React from 'react';
import clsx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { inputClasses } from '@mui/material/Input';
import { TransTitle } from '@ui-schema/ui-schema';
import { ValidityHelperText } from '@ui-schema/ds-material';
import { MarkdownLabel } from '@ui-schema/material-slate/EditorWrapper/MarkdownLabel';
export const useFormEditorStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  editor: {
    position: 'relative',
    marginTop: theme.spacing(2),
    minHeight: ({
      dense
    }) => dense ? theme.spacing(2.375 + 0.375 + 0.875) : theme.spacing(2.375 + 0.75 + 0.875),
    paddingTop: ({
      dense
    }) => dense ? theme.spacing(0.375) : theme.spacing(0.75),
    '& .slate-HeadingToolbar': {
      borderBottom: 0,
      opacity: ({
        focused
      }) => focused ? 1 : 0,
      pointerEvents: ({
        focused
      }) => focused ? 'all' : 'none',
      transition: 'opacity 0.25s ease-out',
      margin: 0,
      padding: '0 ' + theme.spacing(1) + ' 0 ' + theme.spacing(1),
      justifyContent: 'center',
      position: 'absolute',
      top: ({
        dense
      }) => dense ? theme.spacing((2 + 0.375) * -1) : theme.spacing((2 + 0.75) * -1),
      left: 0,
      right: 0,
      minHeight: 0
    }
  }
}));
export const FormWrapper = ({
  storeKeys,
  schema,
  errors,
  showValidity,
  valid,
  children,
  dense,
  focused,
  empty,
  classes
}) => {
  const hideMd = schema.getIn(['view', 'hideMd']);
  return React.createElement(FormControl, {
    className: classes.wrapper
  }, !hideMd ? React.createElement(MarkdownLabel, {
    href: schema.getIn(['view', 'linkMd']),
    enableKeyboard: schema.getIn(['view', 'enableKeyMd']),
    parentFocused: focused
  }) : null, !schema.getIn(['view', 'hideTitle']) && !schema.getIn(['editor', 'placeholder']) ? React.createElement(InputLabel, {
    focused: focused,
    shrink: focused || !empty,
    margin: dense ? 'dense' : undefined,
    error: !valid,
    style: {
      pointerEvents: 'none'
    }
  }, React.createElement(TransTitle, {
    schema: schema,
    storeKeys: storeKeys
  })) : null, React.createElement("div", {
    className: clsx(classes.editor, !schema.getIn(['view', 'noUnderline']) ? inputClasses.underline : null, focused ? inputClasses.focused : null)
  }, children), React.createElement(ValidityHelperText, {
    errors: errors,
    showValidity: showValidity,
    schema: schema
  }));
};