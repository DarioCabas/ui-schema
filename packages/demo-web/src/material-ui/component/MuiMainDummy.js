import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {MuiSchemaDebug} from './MuiSchemaDebug';
import {MainDummy} from '../../component/MainDummy';

const DummyRenderer = ({id, schema, toggleDummy, getDummy, variant = undefined, open, classes, stylePaper = {}}) => <React.Fragment>
    {open ? null : <Button style={{marginBottom: 12}} onClick={() => toggleDummy(id)} variant={(getDummy && getDummy(id) ? 'contained' : 'outlined')}>
        {id.replace(/([A-Z0-9])/g, ' $1').replace(/^./, str => str.toUpperCase())}
    </Button>}
    {(getDummy && getDummy(id)) || open ? <Paper
        className={classes.paper} style={stylePaper}
        // outlined or elevation
        variant={variant}
    >
        <MainDummy
            schema={schema}
            Debugger={MuiSchemaDebug}
            Button={Button}
        />
    </Paper> : null}
</React.Fragment>;

export {DummyRenderer}
