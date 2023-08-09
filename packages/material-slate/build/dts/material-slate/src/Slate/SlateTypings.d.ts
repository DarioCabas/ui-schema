import React from 'react';
import { Element, NodeEntry, Range } from 'slate';
import { RenderLeafProps } from 'slate-react';
import { editorEnableOnly } from '@ui-schema/material-slate/Slate/SlateRenderer';
export interface CustomElement extends Element {
    type?: string;
}
/**
 * `RenderElementProps` are passed to the `renderElement` handler.
 */
export interface RenderElementProps {
    children: React.ReactNode;
    element: CustomElement;
    attributes: {
        'data-slate-node': 'element';
        'data-slate-inline'?: true;
        'data-slate-void'?: true;
        dir?: 'rtl';
        ref: any;
    };
}
/**
 * `RenderElementProps` are passed to the `renderElement` handler.
 */
export interface RenderMapperProps extends RenderElementProps {
    enableOnly: editorEnableOnly | undefined;
}
/**
 * `EditableProps` are passed to the `<Editable>` component.
 */
export declare type EditableProps = {
    decorate?: (entry: NodeEntry) => Range[];
    onDOMBeforeInput?: (event: Event) => void;
    placeholder?: string;
    readOnly?: boolean;
    role?: string;
    style?: React.CSSProperties;
    renderElement?: (props: RenderElementProps) => JSX.Element;
    renderLeaf?: (props: RenderLeafProps) => JSX.Element;
    as?: React.ElementType;
} & React.TextareaHTMLAttributes<HTMLDivElement>;
