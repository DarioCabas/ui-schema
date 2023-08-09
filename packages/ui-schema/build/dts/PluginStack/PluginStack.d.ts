export function PluginStack({ StackWrapper, wrapperProps, ...props }: {
    [x: string]: any;
    StackWrapper: any;
    wrapperProps: any;
}): JSX.Element | null;
export function getNextPlugin(next: any, { pluginStack: ps, WidgetRenderer }: {
    pluginStack: any;
    WidgetRenderer: any;
}): any;
export function NextPluginRenderer({ currentPluginIndex, ...props }: {
    [x: string]: any;
    currentPluginIndex: any;
}): JSX.Element;
export function NextPluginRendererMemo({ currentPluginIndex, ...props }: {
    [x: string]: any;
    currentPluginIndex: any;
}): JSX.Element;
