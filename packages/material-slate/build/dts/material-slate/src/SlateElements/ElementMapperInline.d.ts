import { RenderElementProps } from '@ui-schema/material-slate/Slate/SlateTypings';
import { ElementMapperType } from '@ui-schema/material-slate/SlateElements/ElementMapper';
export interface ElementMapping {
    [k: string]: (props: RenderElementProps) => JSX.Element;
}
export declare const ElementMapperInline: ElementMapperType;
