import React from 'react';
import { PluginProps } from '@ui-schema/ui-schema/PluginStack';
export declare const ReferencingHandler: <P extends PluginProps<import("../..").WidgetsBindingFactory<{}, {}, {}>> & {
    rootContext?: {
        [k: string]: any;
    } | undefined;
}>({ rootContext, ...props }: P) => React.ReactElement;
