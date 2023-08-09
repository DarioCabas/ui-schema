import { ReactEditor } from 'slate-react';
import { SlatePlugin, ResetBlockTypePluginOptions } from '@udecode/slate-plugins';
import { editorEnableOnly, SlateHocType } from '@ui-schema/material-slate/Slate/SlateRenderer';
export declare const optionsResetBlockTypes: ResetBlockTypePluginOptions;
export declare const slatePlugins: SlatePlugin[];
export interface CustomOptions {
    enableOnly: editorEnableOnly | undefined;
    onlyInline: boolean;
}
export type withPluginsType = (options: CustomOptions) => SlateHocType<ReactEditor>[];
export declare const withPlugins: withPluginsType;
