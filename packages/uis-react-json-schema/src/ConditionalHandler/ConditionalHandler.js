import React from 'react';
import {Map, Record} from 'immutable';
import {NextPluginRendererMemo} from '@ui-schema/react/WidgetEngine';
import {handleIfElseThen} from './handleIfElseThen';
import {schemaTypeIs} from '@ui-schema/system/schemaTypeIs';

export const ConditionalHandler = (props) => {
    let {schema, value} = props;

    const keyIf = schema.get('if');

    if(
        keyIf &&
        // when current schema does not have a type, it's a pure combining schema and it's conditionals can not be checked
        //   this can come from a state where the combining schema has not been resolved (yet)
        //   also an `if` can only be inside an `Map`/object
        // todo: only when `type` object?
        schemaTypeIs(schema.get('type'), 'object') &&
        (Map.isMap(value) || Record.isRecord(value))
    ) {
        schema = handleIfElseThen(schema, value, schema);
    }

    return <NextPluginRendererMemo {...props} schema={schema}/>;
};
