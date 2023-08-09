import React from 'react';
import { WidgetProps } from '@ui-schema/ui-schema';
export declare const useFormEditorStyles: (props: {
    dense: boolean;
    focused: boolean;
}) => import("@mui/styles/withStyles").ClassNameMap<"wrapper" | "editor">;
export declare const FormWrapper: React.ComponentType<React.PropsWithChildren<{
    dense: boolean;
    focused: boolean;
    empty: boolean;
    storeKeys: WidgetProps['storeKeys'];
    schema: WidgetProps['schema'];
    errors: WidgetProps['errors'];
    showValidity: WidgetProps['showValidity'];
    valid: WidgetProps['valid'];
    classes: Record<'wrapper' | 'editor', string>;
}>>;
