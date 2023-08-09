import React from 'react';
import { Transforms } from 'slate';
import Checkbox from '@mui/material/Checkbox';
import { ReactEditor, useSlateStatic, useReadOnly } from 'slate-react';
import { pluginOptions } from '@ui-schema/material-slate/Slate/pluginOptions';
export const mappingAdvanced = {
  [pluginOptions.todo_li.type]: ({
    element,
    children
  }) => {
    const editor = useSlateStatic();
    const {
      checked
    } = element;
    const readOnly = useReadOnly();
    return React.createElement("div", {
      contentEditable: false
    }, React.createElement(Checkbox, {
      checked: Boolean(checked),
      onChange: e => {
        const path = ReactEditor.findPath(editor, element);
        Transforms.setNodes(editor, {
          checked: e.target.checked
        }, {
          at: path
        });
      },
      disabled: readOnly,
      size: 'small',
      style: {
        padding: 4
      }
    }), React.createElement("span", {
      contentEditable: !readOnly,
      suppressContentEditableWarning: true,
      style: {
        outline: 0
      }
    }, children));
  }
};