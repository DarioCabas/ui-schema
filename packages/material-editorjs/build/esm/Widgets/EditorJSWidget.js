import React from 'react';
import { useUID } from 'react-uid';
import clsx from 'clsx';
import { TransTitle } from '@ui-schema/ui-schema/Translate';
import { EditorJS } from '@ui-schema/material-editorjs/EditorJS/EditorJS';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import { ValidityHelperText } from '@ui-schema/ds-material/Component/LocaleHelperText';
import { inputClasses } from '@mui/material/Input';
import { useTheme } from '@mui/material/styles';
export const useEditorStyles = (theme, {
  dense
}) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  editor: {
    position: 'relative',
    marginTop: theme.spacing(2),
    minHeight: dense ? theme.spacing(2.375 + 0.375 + 0.875) : theme.spacing(2.375 + 0.75 + 0.875),
    paddingTop: dense ? theme.spacing(0.375) : theme.spacing(0.75),
    paddingBottom: theme.spacing(0.875),
    '& .cdx-block': {
      lineHeight: '1.2em',
      fontSize: theme.typography.body1.fontSize,
      padding: 0
    },
    '& .ce-toolbar__plus': {
      left: 0
    },
    '& .ce-toolbox': {
      left: 34
    },
    '& .ce-block__content': {
      maxWidth: 'none'
    },
    '& .ce-toolbar__content': {
      maxWidth: 'none'
    }
  }
});
export const EditorJSWidget = ({
  schema,
  storeKeys,
  showValidity,
  valid,
  errors,
  required,
  tools,
  hideTitle
}) => {
  const uid = useUID();
  const [focused, setFocused] = React.useState(false);
  const [ready, setReady] = React.useState(false);
  const [empty, setEmpty] = React.useState(true);
  const dense = schema.getIn(['view', 'dense']);
  const theme = useTheme();
  const styles = useEditorStyles(theme, {
    dense
  });
  return React.createElement(FormControl, {
    sx: styles.wrapper
  }, !hideTitle && !schema.getIn(['view', 'hideTitle']) ? React.createElement(InputLabel, {
    focused: focused,
    shrink: focused || !empty,
    margin: dense ? 'dense' : undefined,
    error: !valid
  }, React.createElement(TransTitle, {
    schema: schema,
    storeKeys: storeKeys
  })) : null, React.createElement(Box, {
    sx: styles.editor,
    className: clsx(inputClasses.underline, focused ? inputClasses.focused : null)
  }, React.createElement(EditorJS, {
    uid: uid,
    ready: ready,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onReady: () => setReady(true),
    onEmptyChange: e => setEmpty(e),
    storeKeys: storeKeys,
    tools: tools,
    required: Boolean(schema.get('deleteOnEmpty') || required)
  })), React.createElement(ValidityHelperText, {
    errors: errors,
    showValidity: showValidity,
    schema: schema
  }));
};