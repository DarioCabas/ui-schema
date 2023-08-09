export declare const headingOptions: {
    h1: {
        hotkey: string[];
        type?: string | undefined;
        component?: any;
        rootProps?: (import("@udecode/slate-plugins").RenderNodePropsOptions & import("@udecode/slate-plugins").HeadingRenderElementPropsOptions) | undefined;
        defaultType?: string | undefined;
        nodeToProps?: ((options: import("@udecode/slate-plugins").NodeToPropsOptions<import("@udecode/slate-plugins").HeadingNode, import("@udecode/slate-plugins").HeadingRenderElementPropsOptions>) => import("@udecode/slate-plugins").HtmlAttributes) | undefined;
        deserialize?: Partial<import("@udecode/slate-plugins").DeserializerOptions> | undefined;
    };
    h2: {
        hotkey: string[];
        type?: string | undefined;
        component?: any;
        rootProps?: (import("@udecode/slate-plugins").RenderNodePropsOptions & import("@udecode/slate-plugins").HeadingRenderElementPropsOptions) | undefined;
        defaultType?: string | undefined;
        nodeToProps?: ((options: import("@udecode/slate-plugins").NodeToPropsOptions<import("@udecode/slate-plugins").HeadingNode, import("@udecode/slate-plugins").HeadingRenderElementPropsOptions>) => import("@udecode/slate-plugins").HtmlAttributes) | undefined;
        deserialize?: Partial<import("@udecode/slate-plugins").DeserializerOptions> | undefined;
    };
    h3: {
        hotkey: string[];
        type?: string | undefined;
        component?: any;
        rootProps?: (import("@udecode/slate-plugins").RenderNodePropsOptions & import("@udecode/slate-plugins").HeadingRenderElementPropsOptions) | undefined;
        defaultType?: string | undefined;
        nodeToProps?: ((options: import("@udecode/slate-plugins").NodeToPropsOptions<import("@udecode/slate-plugins").HeadingNode, import("@udecode/slate-plugins").HeadingRenderElementPropsOptions>) => import("@udecode/slate-plugins").HtmlAttributes) | undefined;
        deserialize?: Partial<import("@udecode/slate-plugins").DeserializerOptions> | undefined;
    };
    h4: {
        hotkey: string[];
        type?: string | undefined;
        component?: any;
        rootProps?: (import("@udecode/slate-plugins").RenderNodePropsOptions & import("@udecode/slate-plugins").HeadingRenderElementPropsOptions) | undefined;
        defaultType?: string | undefined;
        nodeToProps?: ((options: import("@udecode/slate-plugins").NodeToPropsOptions<import("@udecode/slate-plugins").HeadingNode, import("@udecode/slate-plugins").HeadingRenderElementPropsOptions>) => import("@udecode/slate-plugins").HtmlAttributes) | undefined;
        deserialize?: Partial<import("@udecode/slate-plugins").DeserializerOptions> | undefined;
    };
    h5: {
        hotkey: string[];
        type?: string | undefined;
        component?: any;
        rootProps?: (import("@udecode/slate-plugins").RenderNodePropsOptions & import("@udecode/slate-plugins").HeadingRenderElementPropsOptions) | undefined;
        defaultType?: string | undefined;
        nodeToProps?: ((options: import("@udecode/slate-plugins").NodeToPropsOptions<import("@udecode/slate-plugins").HeadingNode, import("@udecode/slate-plugins").HeadingRenderElementPropsOptions>) => import("@udecode/slate-plugins").HtmlAttributes) | undefined;
        deserialize?: Partial<import("@udecode/slate-plugins").DeserializerOptions> | undefined;
    };
    h6: {
        hotkey: string[];
        type?: string | undefined;
        component?: any;
        rootProps?: (import("@udecode/slate-plugins").RenderNodePropsOptions & import("@udecode/slate-plugins").HeadingRenderElementPropsOptions) | undefined;
        defaultType?: string | undefined;
        nodeToProps?: ((options: import("@udecode/slate-plugins").NodeToPropsOptions<import("@udecode/slate-plugins").HeadingNode, import("@udecode/slate-plugins").HeadingRenderElementPropsOptions>) => import("@udecode/slate-plugins").HtmlAttributes) | undefined;
        deserialize?: Partial<import("@udecode/slate-plugins").DeserializerOptions> | undefined;
    };
    levels: number;
};
export declare const headingTypes: string[];
export declare const pluginOptions: {
    search_highlight: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").RenderNodeOptions & import("@udecode/slate-plugins").RootProps<import("@udecode/slate-plugins").ItalicRenderLeafPropsOptions> & Partial<import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions> & import("@udecode/slate-plugins").Deserialize & import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions>;
    highlight: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").RenderNodeOptions & import("@udecode/slate-plugins").RootProps<import("@udecode/slate-plugins").HighlightRenderLeafPropsOptions> & Partial<import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions> & import("@udecode/slate-plugins").Deserialize & import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions>;
    subscript: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").RenderNodeOptions & import("@udecode/slate-plugins").RootProps<import("@udecode/slate-plugins").SubscriptRenderLeafPropsOptions> & Partial<import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions> & import("@udecode/slate-plugins").Deserialize & import("@udecode/slate-plugins").RootProps<import("@udecode/slate-plugins").SuperscriptRenderLeafPropsOptions> & import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions>;
    superscript: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").RenderNodeOptions & import("@udecode/slate-plugins").RootProps<import("@udecode/slate-plugins").SubscriptRenderLeafPropsOptions> & Partial<import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions> & import("@udecode/slate-plugins").Deserialize & import("@udecode/slate-plugins").RootProps<import("@udecode/slate-plugins").SuperscriptRenderLeafPropsOptions> & import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions>;
    kbd: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").RenderNodeOptions & import("@udecode/slate-plugins").RootProps<import("@udecode/slate-plugins").KbdRenderLeafPropsOptions> & Partial<import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions> & import("@udecode/slate-plugins").Deserialize & import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions>;
    code: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").RenderNodeOptions & import("@udecode/slate-plugins").RootProps<import("@udecode/slate-plugins").CodeRenderLeafPropsOptions> & Partial<import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions> & import("@udecode/slate-plugins").Deserialize & import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions>;
    strikethrough: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").RenderNodeOptions & import("@udecode/slate-plugins").RootProps<import("@udecode/slate-plugins").StrikethroughRenderLeafPropsOptions> & Partial<import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions> & import("@udecode/slate-plugins").Deserialize & import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions>;
    underline: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").RenderNodeOptions & import("@udecode/slate-plugins").RootProps<import("@udecode/slate-plugins").UnderlineRenderLeafPropsOptions> & Partial<import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions> & import("@udecode/slate-plugins").Deserialize & import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions>;
    italic: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").RenderNodeOptions & import("@udecode/slate-plugins").RootProps<import("@udecode/slate-plugins").ItalicRenderLeafPropsOptions> & Partial<import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions> & import("@udecode/slate-plugins").Deserialize & import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions>;
    bold: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").RenderNodeOptions & import("@udecode/slate-plugins").RootProps<import("@udecode/slate-plugins").BoldRenderLeafPropsOptions> & Partial<import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions> & import("@udecode/slate-plugins").Deserialize & import("@udecode/slate-plugins").GetOnHotkeyToggleMarkOptions>;
    align_left: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").AlignPluginOptionsValues>;
    align_center: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").AlignPluginOptionsValues>;
    align_justify: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").AlignPluginOptionsValues>;
    align_right: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").AlignPluginOptionsValues>;
    h1: import("utility-types/dist/mapped-types")._DeepRequiredObject<{
        hotkey: string[];
        type?: string | undefined;
        component?: any;
        rootProps?: (import("@udecode/slate-plugins").RenderNodePropsOptions & import("@udecode/slate-plugins").HeadingRenderElementPropsOptions) | undefined;
        defaultType?: string | undefined;
        nodeToProps?: ((options: import("@udecode/slate-plugins").NodeToPropsOptions<import("@udecode/slate-plugins").HeadingNode, import("@udecode/slate-plugins").HeadingRenderElementPropsOptions>) => import("@udecode/slate-plugins").HtmlAttributes) | undefined;
        deserialize?: Partial<import("@udecode/slate-plugins").DeserializerOptions> | undefined;
    }>;
    h2: import("utility-types/dist/mapped-types")._DeepRequiredObject<{
        hotkey: string[];
        type?: string | undefined;
        component?: any;
        rootProps?: (import("@udecode/slate-plugins").RenderNodePropsOptions & import("@udecode/slate-plugins").HeadingRenderElementPropsOptions) | undefined;
        defaultType?: string | undefined;
        nodeToProps?: ((options: import("@udecode/slate-plugins").NodeToPropsOptions<import("@udecode/slate-plugins").HeadingNode, import("@udecode/slate-plugins").HeadingRenderElementPropsOptions>) => import("@udecode/slate-plugins").HtmlAttributes) | undefined;
        deserialize?: Partial<import("@udecode/slate-plugins").DeserializerOptions> | undefined;
    }>;
    h3: import("utility-types/dist/mapped-types")._DeepRequiredObject<{
        hotkey: string[];
        type?: string | undefined;
        component?: any;
        rootProps?: (import("@udecode/slate-plugins").RenderNodePropsOptions & import("@udecode/slate-plugins").HeadingRenderElementPropsOptions) | undefined;
        defaultType?: string | undefined;
        nodeToProps?: ((options: import("@udecode/slate-plugins").NodeToPropsOptions<import("@udecode/slate-plugins").HeadingNode, import("@udecode/slate-plugins").HeadingRenderElementPropsOptions>) => import("@udecode/slate-plugins").HtmlAttributes) | undefined;
        deserialize?: Partial<import("@udecode/slate-plugins").DeserializerOptions> | undefined;
    }>;
    h4: import("utility-types/dist/mapped-types")._DeepRequiredObject<{
        hotkey: string[];
        type?: string | undefined;
        component?: any;
        rootProps?: (import("@udecode/slate-plugins").RenderNodePropsOptions & import("@udecode/slate-plugins").HeadingRenderElementPropsOptions) | undefined;
        defaultType?: string | undefined;
        nodeToProps?: ((options: import("@udecode/slate-plugins").NodeToPropsOptions<import("@udecode/slate-plugins").HeadingNode, import("@udecode/slate-plugins").HeadingRenderElementPropsOptions>) => import("@udecode/slate-plugins").HtmlAttributes) | undefined;
        deserialize?: Partial<import("@udecode/slate-plugins").DeserializerOptions> | undefined;
    }>;
    h5: import("utility-types/dist/mapped-types")._DeepRequiredObject<{
        hotkey: string[];
        type?: string | undefined;
        component?: any;
        rootProps?: (import("@udecode/slate-plugins").RenderNodePropsOptions & import("@udecode/slate-plugins").HeadingRenderElementPropsOptions) | undefined;
        defaultType?: string | undefined;
        nodeToProps?: ((options: import("@udecode/slate-plugins").NodeToPropsOptions<import("@udecode/slate-plugins").HeadingNode, import("@udecode/slate-plugins").HeadingRenderElementPropsOptions>) => import("@udecode/slate-plugins").HtmlAttributes) | undefined;
        deserialize?: Partial<import("@udecode/slate-plugins").DeserializerOptions> | undefined;
    }>;
    h6: import("utility-types/dist/mapped-types")._DeepRequiredObject<{
        hotkey: string[];
        type?: string | undefined;
        component?: any;
        rootProps?: (import("@udecode/slate-plugins").RenderNodePropsOptions & import("@udecode/slate-plugins").HeadingRenderElementPropsOptions) | undefined;
        defaultType?: string | undefined;
        nodeToProps?: ((options: import("@udecode/slate-plugins").NodeToPropsOptions<import("@udecode/slate-plugins").HeadingNode, import("@udecode/slate-plugins").HeadingRenderElementPropsOptions>) => import("@udecode/slate-plugins").HtmlAttributes) | undefined;
        deserialize?: Partial<import("@udecode/slate-plugins").DeserializerOptions> | undefined;
    }>;
    levels: number;
    li: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").ListPluginOptionsValues>;
    ol: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").ListPluginOptionsValues>;
    p: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").ListPluginOptionsValues>;
    ul: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").ListPluginOptionsValues>;
    table: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").TablePluginOptionsValues>;
    td: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").TablePluginOptionsValues>;
    th: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").TablePluginOptionsValues>;
    tr: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").TablePluginOptionsValues>;
    todo_li: import("utility-types/dist/mapped-types")._DeepRequiredObject<{
        hotkey: string;
    } & import("@udecode/slate-plugins").RenderNodeOptions & import("@udecode/slate-plugins").RootProps<import("@udecode/slate-plugins").TodoListRenderElementPropsOptions> & import("@udecode/slate-plugins").NodeToProps<import("@udecode/slate-plugins").TodoListNode, import("@udecode/slate-plugins").TodoListRenderElementPropsOptions>>;
    media_embed: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").MediaEmbedPluginOptionsValues>;
    img: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").ImagePluginOptionsValues>;
    link: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").LinkPluginOptionsValues>;
    code_block: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").CodeBlockPluginOptionsValues>;
    code_line: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").CodeBlockPluginOptionsValues>;
    blockquote: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").BlockquotePluginOptionsValues>;
    mention: import("utility-types/dist/mapped-types")._DeepRequiredObject<import("@udecode/slate-plugins").MentionPluginOptionsValues>;
};
