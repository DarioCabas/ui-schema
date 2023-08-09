import React from 'react';
import { ClassNameMap } from '@mui/styles/withStyles';
import { WidgetProps } from '@ui-schema/ui-schema';
export declare const usePaneEditorStyles: (props: {
    dense: boolean;
    focused: boolean;
}) => ClassNameMap<string>;
export declare const PaneWrapper: React.ComponentType<React.PropsWithChildren<{
    dense: boolean;
    focused: boolean;
    empty: boolean;
    storeKeys: WidgetProps['storeKeys'];
    schema: WidgetProps['schema'];
    errors: WidgetProps['errors'];
    showValidity: WidgetProps['showValidity'];
    valid: WidgetProps['valid'];
    classes: ClassNameMap<'wrapper' | 'editor'>;
}>>;
