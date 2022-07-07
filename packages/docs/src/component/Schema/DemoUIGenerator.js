import React from 'react';
import {Button, Box, Typography, useTheme, useMediaQuery} from '@mui/material';
import {createOrderedMap, createEmptyStore, storeUpdater, injectPluginStack} from '@ui-schema/ui-schema';
import {isInvalid} from '@ui-schema/ui-schema/ValidityReporter';
import {UIStoreProvider} from '@ui-schema/ui-schema/UIStore';
import {RichCodeEditor} from '../RichCodeEditor';
// import LuxonAdapter from '@date-io/luxon';
// import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import {KitDndProvider, useOnIntent} from '@ui-schema/kit-dnd';
import {useOnDirectedMove} from '@ui-schema/material-dnd/useOnDirectedMove';
import {GridContainer} from '@ui-schema/ds-material';

const SchemaJSONEditor = ({schema, setJsonError, setSchema, tabSize, fontSize, richIde, renderChange, theme, maxLines, enableShowAll}) => {
    return <RichCodeEditor
        tabSize={tabSize}
        fontSize={fontSize}
        raw={!richIde}
        theme={theme}
        enableShowAll={enableShowAll}
        renderChange={renderChange}
        value={typeof schema === 'string' ? schema : JSON.stringify(schema?.toJS(), null, tabSize)}
        onChange={(newValue) => {
            try {
                setJsonError(false);
                setSchema(createOrderedMap(JSON.parse(newValue)));
            } catch(e) {
                setJsonError(e.toString());
                setSchema(newValue);
            }
        }}
        minLines={3} maxLines={maxLines}
    />
};

const SchemaDataDebug = ({tabSize, fontSize, richIde, renderChange, theme, maxLines, store}) => {
    return <RichCodeEditor
        value={typeof store?.getValues() !== 'string' && typeof store?.getValues() !== 'number' && typeof store?.getValues() !== 'boolean' && store?.getValues() ? JSON.stringify(store?.valuesToJS(), null, tabSize) : store?.getValues()}
        theme={theme}
        tabSize={tabSize}
        fontSize={fontSize}
        renderChange={renderChange}
        raw={!richIde}
        minLines={3} maxLines={maxLines}
        readOnly
    />
};

const GridStack = injectPluginStack(GridContainer)

const DemoUIGenerator = ({activeSchema, id = '0', onClick = undefined, showDebugger = true, split = true, uiStyle = undefined}) => {
    const [jsonError, setJsonError] = React.useState(false);
    const [maxLines /*setMaxLines*/] = React.useState(15);
    const {breakpoints} = useTheme();
    const isMd = useMediaQuery(breakpoints.up('md'))

    // default schema state - begin
    const [showValidity /*setShowValidity*/] = React.useState(true);
    const [schema, setSchema] = React.useState(undefined);
    const [store, setStore] = React.useState(undefined);
    // end - default schema state

    React.useEffect(() => {
        let schema = createOrderedMap(activeSchema);
        setSchema(() => schema);
        setStore(oldStore => {
            const newStore = createEmptyStore(schema.get('type'))
            if(newStore.values.equals && newStore.values.equals(oldStore?.values)) {
                // only change the store, when the values have really changed - otherwise it could overwrite the already changed validity
                return oldStore
            }
            return newStore
        });
    }, [activeSchema, setSchema, setStore]);

    const onChange = React.useCallback((actions) => {
        setStore(prevStore => {
            return storeUpdater(actions)(prevStore)
        })
    }, [setStore]);

    const {onIntent} = useOnIntent({edgeSize: 12})
    const {onMove} = useOnDirectedMove(onIntent, onChange)

    const tabSize = 2;
    const fontSize = 13;

    return <div style={uiStyle}>
        {/*<MuiPickersUtilsProvider utils={LuxonAdapter}>*/}
        <KitDndProvider onMove={onMove}>
            <UIStoreProvider
                store={store}
                onChange={onChange}
                showValidity={showValidity}
            >
                {showDebugger && !split ?
                    <DebugSchemaEditor
                        schema={schema} setSchema={setSchema}
                        setJsonError={setJsonError} richIde
                        enableShowAll={!split} split={split}
                        id={id} tabSize={tabSize} fontSize={fontSize} maxLines={maxLines}
                        width={split && isMd ? '50%' : '100%'}
                    /> : null}

                {jsonError ?
                    <Box style={{margin: '0 12px 0 12px'}}>
                        <Typography component={'h2'} variant={'h6'} color={'error'}>
                            JSON-Error:
                        </Typography>

                        <Typography component={'p'} variant={'subtitle1'}>
                            {jsonError.replace('SyntaxError: JSON.parse: ', '')}
                        </Typography>
                    </Box> : null}

                {typeof schema === 'string' || !store ? null : <GridStack isRoot schema={schema}/>}
            </UIStoreProvider>
        </KitDndProvider>
        {/*</MuiPickersUtilsProvider>*/}

        {typeof schema === 'string' ? null :
            onClick ? <Button
                variant={'contained'}
                disabled={!!isInvalid(store?.getValidity())}
                style={{marginTop: 12}}
                onClick={() => isInvalid(store?.getValidity()) ? undefined : onClick(store)}>Send</Button> : null}

        {showDebugger ? <Box style={{display: 'flex', flexWrap: 'wrap', margin: '12px 0 24px 0'}}>
            {split ? <DebugSchemaEditor
                schema={schema} setSchema={setSchema}
                setJsonError={setJsonError} richIde
                enableShowAll
                split={split}
                id={id} tabSize={tabSize} fontSize={fontSize} maxLines={maxLines}
                width={split && isMd ? '50%' : '100%'}
            /> : null}

            <Box style={{width: split && isMd ? '50%' : '100%', paddingLeft: split ? 6 : 0}}>
                <Typography component={'p'} variant={'overline'} style={{paddingLeft: 4}}>
                    Data:
                </Typography>
                <SchemaDataDebug
                    richIde store={store}
                    id={id} tabSize={tabSize} fontSize={fontSize} maxLines={maxLines}
                />
            </Box>
        </Box> : null}
    </div>;
};

const DebugSchemaEditor = ({split, width, ...props}) => <Box style={{width: width, paddingRight: split ? 6 : 0}}>
    <Typography component={'p'} variant={'overline'} style={{paddingLeft: 4}}>
        Schema:
    </Typography>
    <SchemaJSONEditor
        richIde
        {...props}
    />
</Box>;

export default DemoUIGenerator;
