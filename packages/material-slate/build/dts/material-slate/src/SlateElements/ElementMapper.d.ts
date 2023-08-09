import { RenderElementProps, RenderMapperProps } from '@ui-schema/material-slate/Slate/SlateTypings';
export interface ElementMapping {
    [k: string]: (props: RenderElementProps) => JSX.Element;
}
export type ElementMapperType = ({ attributes, children, element }: RenderMapperProps) => JSX.Element;
export declare const ElementMapper: ElementMapperType;
