import React, { FocusEventHandler } from 'react';
import { List } from 'immutable';
import { ReactEditor } from 'slate-react';
import { EditablePluginsProps, RenderLeaf } from '@udecode/slate-plugins';
import { Descendant } from 'slate';
import { WidgetProps, WithValue } from '@ui-schema/ui-schema';
import { ElementMapperType } from '@ui-schema/material-slate/SlateElements/ElementMapper';
import { withPluginsType } from '@ui-schema/material-slate/Slate/slatePlugins';
export type BulletedListElement = {
    type: string;
    children: Descendant[];
};
export interface SlateRendererProps {
    initialValue?: any;
}
export type editorEnableOnly = List<string>;
export type SlateHocType<T extends ReactEditor> = (editor: T) => T;
declare let SlateRenderer: React.ComponentType<SlateRendererProps & WidgetProps & WithValue & {
    ElementMapper: ElementMapperType;
    onFocus: FocusEventHandler;
    onBlur: FocusEventHandler;
    className?: string;
    onlyInline?: boolean;
    withPlugins: withPluginsType;
    plugins: EditablePluginsProps['plugins'];
    renderLeaf?: RenderLeaf[];
}>;
export { SlateRenderer };
