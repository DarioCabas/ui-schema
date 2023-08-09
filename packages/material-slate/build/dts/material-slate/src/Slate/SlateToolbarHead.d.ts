import React, { FocusEventHandler } from 'react';
import { editorEnableOnly } from '@ui-schema/material-slate/Slate/SlateRenderer';
export declare const SlateToolbarHead: React.ComponentType<{
    enableOnly?: editorEnableOnly;
    onlyInline?: boolean;
    onFocus: FocusEventHandler;
    onBlur: FocusEventHandler;
}>;
