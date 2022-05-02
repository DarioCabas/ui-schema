import React from 'react'
import AppTheme from './layout/AppTheme'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Label from '@mui/material/FormLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Dashboard from './dashboard/Dashboard'
import { MuiWidgetBinding, MuiWidgetsBindingCustom, MuiWidgetsBindingTypes, widgets } from '@ui-schema/ds-material'
import { browserT } from '../t'
import { MuiSchemaDebug } from './component/MuiSchemaDebug'
import { isInvalid } from '@ui-schema/ui-schema/ValidityReporter/isInvalid'
import { schemaDragDropNested, schemaDragDropScoped } from '../schemas/demoDragDrop'
import { DndProvider } from 'react-dnd'
import { MultiBackend } from 'react-dnd-multi-backend'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

import { TouchTransition, PointerTransition, MultiBackendOptions } from 'dnd-multi-backend'
import {
    createEmptyStore,
    createOrderedMap,
    createStore, onChangeHandler,
    SchemaTypesType,
    StoreSchemaType,
    storeUpdater,
    UIMetaProvider,
    UIStoreProvider,
    UIStoreType, WidgetProps,
    WidgetsBindingFactory, WithOnChange,
} from '@ui-schema/ui-schema'
import { OrderedMap } from 'immutable'
import { RichContent, RichContentInline, RichContentPane } from '@ui-schema/material-slate'
import { UIRootRenderer } from '@ui-schema/ui-schema/UIRootRenderer'
import { DndBlock, DragDropBlockProvider } from '@ui-schema/material-dnd/DragDropBlockProvider'
import { KitDndProvider, useOnIntent } from '@ui-schema/kit-dnd'
import { useOnDirectedMove } from '@ui-schema/material-dnd/useOnDirectedMove'
import { DragDropSpec } from '@ui-schema/material-dnd/DragDropSpec'
import { SortableList } from '@ui-schema/material-dnd/Widgets/SortableList'
import { DragDropArea } from '@ui-schema/material-dnd/Widgets/DragDropArea'
import { DragDropBlockSelector } from '@ui-schema/material-dnd/DragDropBlockSelector'
import { DragDropBlockComponentsBinding } from '@ui-schema/material-dnd/DragDropBlock'
import { DropArea } from '@ui-schema/material-dnd/Widgets/DropArea'

export type CustomWidgetsBinding = WidgetsBindingFactory<DragDropBlockComponentsBinding, MuiWidgetsBindingTypes<{}>, MuiWidgetsBindingCustom<{}> & {
    DragDropArea: React.ComponentType<WidgetProps<MuiWidgetBinding & DragDropBlockComponentsBinding> & WithOnChange>
}>

const customWidgets: CustomWidgetsBinding = {
    ...widgets,
    DndBlockSelector: DragDropBlockSelector,
    custom: {
        ...widgets.custom,
        // @ts-ignore
        //DroppableRootMultiple: DroppableRootMultiple,
        //DroppableRootSingle: DroppableRootSingle,
        //DroppablePanel: DroppablePanel,
        DropArea: DropArea,
        DragDropArea: DragDropArea,
        SortableList: SortableList,
        RichContentPane: RichContentPane,
        RichContent: RichContent,
        RichContentInline: RichContentInline,
    },
}

const blocks: DndBlock[] = [
    {
        type: 'area',
        typeKey: '_block',
        idKey: '_bid',
        isDroppable: true,
        listKey: 'list',
        schema: createOrderedMap({
            type: 'object',
            widget: 'DragDropArea',
            //dragDrop: {listPath: '/list'},
            properties: {
                _bid: {
                    type: 'string',
                },
                _block: {
                    type: 'string',
                },
                list: {
                    type: 'array',
                },
            },
        }),
    }, {
        type: 'address',
        typeKey: '_block',
        idKey: '_bid',
        schema: createOrderedMap({
            type: 'object',
            //widget: 'DragArea',
            properties: {
                name: {
                    type: 'string',
                },
            },
        }),
    }, {
        type: 'addresses',
        typeKey: '_block',
        idKey: '_bid',
        isDroppable: true,
        listKey: 'addresses',
        schema: createOrderedMap({
            type: 'array',
            widget: 'DragDropArea',
            title: 'Addresses',
            view: {
                showTitle: true,
            },
            dragDrop: {
                allowed: ['address'],
            },
            addresses: {
                type: 'array',
            },
        }),
    },
]

const schemas: [StoreSchemaType, boolean][] = [
    [schemaDragDropNested, true],
    [schemaDragDropScoped, true],
]

export const HTML5toTouch: MultiBackendOptions = {
    backends: [
        {
            id: 'html5',
            backend: HTML5Backend,
            transition: PointerTransition,
        },
        {
            id: 'touch',
            backend: TouchBackend,
            options: {enableMouseEvents: true},
            preview: true,
            transition: TouchTransition,
        },
    ],
}

const SingleEditor = () => {
    const [showValidity, setShowValidity] = React.useState(false)

    const [schema, setSchema] = React.useState<number>(0)
    const [store, setStore] = React.useState<UIStoreType>(() => createStore(OrderedMap()))

    const onChange: onChangeHandler = React.useCallback((actions) => {
        setStore(prevStore => {
            return storeUpdater(actions)(prevStore)
        })
    }, [setStore])

    const {onIntent} = useOnIntent<HTMLDivElement, DragDropSpec>({edgeSize: 12})
    const {onMove} = useOnDirectedMove<HTMLDivElement, DragDropSpec>(
        onIntent, onChange,
    )

    return <React.Fragment>
        <Box mb={2}>
            <FormControl>
                <Label>Select Schema</Label>
                <Select
                    value={schema}
                    // @ts-ignore
                    onChange={e => {
                        // @ts-ignore
                        const s = e.target.value as number
                        setSchema(s)
                        setStore(createEmptyStore(schemas[s][0].get('type') as SchemaTypesType))
                    }}
                    displayEmpty
                >
                    {schemas.map((schema, i) => (
                        <MenuItem key={i} value={i} disabled={!schema[1]}>{schema[0].get('title')}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>

        <KitDndProvider<HTMLDivElement, DragDropSpec> onMove={onMove}>
            <DragDropBlockProvider blocks={blocks}>
                <DndProvider backend={MultiBackend} options={HTML5toTouch}>
                    <UIStoreProvider
                        store={store}
                        onChange={onChange}
                        showValidity={showValidity}
                    >
                        <UIRootRenderer schema={schemas[schema][0]}/>
                        <MuiSchemaDebug schema={schemas[schema][0]}/>
                    </UIStoreProvider>
                </DndProvider>
            </DragDropBlockProvider>
        </KitDndProvider>

        <div style={{width: '100%'}}>
            <Button onClick={() => setShowValidity(!showValidity)}>validity</Button>
            <div>
                {isInvalid(store.getValidity()) ? 'invalid' : 'valid'}
            </div>
        </div>
    </React.Fragment>
}

const Main = () => {
    return <React.Fragment>
        <SingleEditor/>
    </React.Fragment>
}

// @ts-ignore
// eslint-disable-next-line react/display-name
export default () => <AppTheme>
    <UIMetaProvider<{}, CustomWidgetsBinding> widgets={customWidgets} t={browserT}>
        <Dashboard main={Main}/>
    </UIMetaProvider>
</AppTheme>

export { customWidgets }
