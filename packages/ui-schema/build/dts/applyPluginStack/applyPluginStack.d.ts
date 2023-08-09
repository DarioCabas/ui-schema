export function applyPluginStack(CustomWidget: any): {
    (p: any): JSX.Element;
    displayName: string;
};
export function injectPluginStack(Wrapper: any, CustomWidget: any): {
    (p: any): JSX.Element;
    displayName: string;
};
