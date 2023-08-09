import React from 'react';
import { Translator } from '@ui-schema/ui-schema/Translate/makeTranslator';
import { WidgetProps } from '@ui-schema/ui-schema/Widget';
import { WidgetsBindingFactory } from '@ui-schema/ui-schema/WidgetsBinding';
export interface UIMetaContext<W = WidgetsBindingFactory> {
    widgets: W;
    t: Translator;
}
export declare function UIMetaProvider<C extends {} = {}, W extends WidgetsBindingFactory = WidgetsBindingFactory>({ children, ...props }: React.PropsWithChildren<UIMetaContext<W> & C>): React.ReactElement;
export declare const useUIMeta: <C extends {} = {}, W extends WidgetsBindingFactory<{}, {}, {}> = WidgetsBindingFactory<{}, {}, {}>>() => UIMetaContext<W> & C;
export declare const withUIMeta: <P extends WidgetProps<WidgetsBindingFactory<{}, {}, {}>>, C extends {} = {}, W extends WidgetsBindingFactory<{}, {}, {}> = WidgetsBindingFactory<{}, {}, {}>>(Component: React.ComponentType<P & UIMetaContext<W> & C>) => React.ComponentType<P>;
