import React from 'react';
import { ErrorFallbackProps } from '@ui-schema/ui-schema/WidgetsBinding';
import { StoreKeys } from '@ui-schema/ui-schema/UIStore';
import { List } from 'immutable';
export declare class PluginStackErrorBoundary extends React.Component<{
    FallbackComponent: React.ComponentType<ErrorFallbackProps>;
    type: string | List<string> | undefined;
    widget: string | undefined;
    storeKeys: StoreKeys;
}> {
    state: {
        error: any;
    };
    static getDerivedStateFromError(error: any): {
        error: any;
    };
    componentDidCatch(error: any, info: any): void;
    render(): React.ReactNode;
}
