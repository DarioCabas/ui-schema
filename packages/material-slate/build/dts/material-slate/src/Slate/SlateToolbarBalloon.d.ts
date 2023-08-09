import React from 'react';
import { editorEnableOnly } from '@ui-schema/material-slate/Slate/SlateRenderer';
export interface SlateToolbarProps {
    direction?: 'top' | 'bottom' | undefined;
    hiddenDelay?: number;
    enableOnly?: editorEnableOnly;
}
export declare const SlateToolbarBalloon: React.ComponentType<SlateToolbarProps>;
