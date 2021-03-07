import {createOrderedMap} from '@ui-schema/ui-schema';

const blocks = {
    text: {
        type: 'object',
        properties: {
            $bid: {
                hidden: true,
                type: 'string',
            },
            $block: {
                hidden: true,
                type: 'string',
            },
            text: {
                type: 'string',
                widget: 'Text',
                view: {
                    hideTitle: true,
                },
            },
        },
        required: ['$bid', '$block'],
    },
    teasers: {
        type: 'object',
        properties: {
            $bid: {
                hidden: true,
                type: 'string',
            },
            $block: {
                hidden: true,
                type: 'string',
            },
            list: {
                type: 'array',
                widget: 'GenericList',
                view: {
                    hideTitle: true,
                },
                items: {
                    type: 'object',
                    properties: {
                        headline: {
                            type: 'string',
                        },
                        content: {
                            type: 'string',
                            widget: 'Text',
                        },
                    },
                },
            },
        },
        required: ['$bid', '$block'],
    },
    address: {
        $ref: 'http://localhost:4200/api/address-schema.json',
    },
    rich_content: {
        type: 'object',
        view: {
            noGrid: true,
        },
        properties: {
            $bid: {
                hidden: true,
                type: 'string',
            },
            $block: {
                hidden: true,
                type: 'string',
            },
            content: {
                type: 'object',
                widget: 'EditorJS',
            },
        },
        required: ['$bid', '$block'],
    },
    'block_group': {
        type: 'object',
        view: {
            noGrid: true,
        },
        properties: {
            $bid: {
                hidden: true,
                type: 'string',
            },
            $block: {
                hidden: true,
                type: 'string',
            },
            list: {
                type: 'array',
                widget: 'DroppablePanel',
            },
        },
        required: ['$bid', '$block'],
    },
    'addresses': {
        type: 'object',
        view: {
            noGrid: true,
        },
        dragDrop: {
            showOpenAll: true,
            //allowed: ['address'],
        },
        properties: {
            $bid: {
                hidden: true,
                type: 'string',
            },
            $block: {
                hidden: true,
                type: 'string',
            },
            list: {
                type: 'array',
                widget: 'DroppablePanel',
                dragDrop: {
                    allowed: ['address'],
                },
            },
        },
        required: ['$bid', '$block'],
    },
}

export const schemaDragDrop = createOrderedMap({
    type: 'object',
    widget: 'DroppableRootMultiple',
    $defs: blocks,
    properties: {
        main: {
            type: 'array',
            //widget: 'EditorJS',
        },
        suggestions: {
            type: 'array',
            //widget: 'Text',
        },
    },
});

export const schemaDragDropSingle = createOrderedMap({
    type: 'array',
    widget: 'DroppableRootSingle',
    $defs: blocks,
    title: 'Single Editor',
    dragDrop: {
        //showOpenAll: true,
        //allowed: ['address', 'addresses'],
    },
});
