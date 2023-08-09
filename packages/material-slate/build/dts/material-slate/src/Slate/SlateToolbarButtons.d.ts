import * as React from 'react';
import { ListOptions, CodeBlockOptions, CodeLineOptions, CodeBlockInsertOptions } from '@udecode/slate-plugins';
import { FocusEventHandler } from 'react';
export interface ToolbarElementProps {
    type: string;
    inactiveType?: string;
    unwrapTypes?: string[];
    icon: JSX.Element;
    onFocus?: FocusEventHandler;
    onBlur?: FocusEventHandler;
}
export interface ToolbarButtonProps {
    selected: boolean;
    type?: string;
    icon: JSX.Element;
    onClick: (event: any) => void;
    onFocus?: FocusEventHandler;
    onBlur?: FocusEventHandler;
}
export declare const ToolbarButton: React.ComponentType<ToolbarButtonProps>;
export declare const ToolbarElement: React.ComponentType<ToolbarElementProps>;
export declare const ToolbarList: React.ComponentType<ToolbarElementProps & ListOptions>;
export declare const ToolbarCodeBlock: React.ComponentType<ToolbarElementProps & {
    options?: CodeBlockOptions & CodeLineOptions & CodeBlockInsertOptions;
}>;
export declare const ToolbarAlign: React.ComponentType<ToolbarElementProps>;
export declare const ToolbarMark: React.ComponentType<ToolbarElementProps & {
    clear?: string | string[];
}>;
