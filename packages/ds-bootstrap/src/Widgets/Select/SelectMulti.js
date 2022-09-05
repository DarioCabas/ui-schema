import React from 'react';
import {beautifyKey} from '@ui-schema/system/Utils/beautify';
import {TranslateTitle} from '@ui-schema/react/TranslateTitle';
import {useUIMeta} from '@ui-schema/react/UIMeta';
import {extractValue} from '@ui-schema/react/UIStore';
import {memo} from '@ui-schema/react/Utils/memo';
import {sortScalarList} from '@ui-schema/system/Utils/sortScalarList';
import {List, Map} from 'immutable';
import {ValidityHelperText} from '../../Component/LocaleHelperText';

export const SelectMulti = extractValue(memo(({schema, storeKeys, showValidity, errors, value, onChange, required}) => {
    const {t} = useUIMeta();

    if(!schema) return null;
    const oneOfValues = schema.getIn(['items', 'oneOf'])
    if(!oneOfValues) return null

    let classForm = ['selectpicker', 'custom-select'];
    let classFormParent = ['form-group'];
    if(showValidity && errors.hasError()) {
        classForm.push('is-invalid');
    }
    if(showValidity && !errors.hasError()) {
        classForm.push('was-validated');
    }
    const currentValue = typeof value !== 'undefined' ? value :
        schema.get('default') ? List(schema.get('default')) : List([]);

    return <div className={classFormParent.join(' ')}>
        <label><TranslateTitle schema={schema} storeKeys={storeKeys}/></label>
        <select
            value={currentValue.toArray()}
            className={classForm.join(' ')}
            multiple
            onChange={(e) => {
                const target = e.target
                onChange({
                    storeKeys,
                    scopes: ['value'],
                    type: 'update',
                    updater: () => ({
                        value: sortScalarList(List([...target.options].filter(o => o.selected).map(o => o.value))),
                    }),
                    schema,
                    required,
                })
            }}>
            {oneOfValues ? oneOfValues.map((oneOfSchema) => {
                const oneOfVal = oneOfSchema.get('const') + '';
                const Translated = t(oneOfVal, Map({relative: List(['title'])}), oneOfSchema.get('t'));

                return <option
                    key={oneOfVal}
                    value={oneOfVal}
                    defaultValue={currentValue.toArray().includes(oneOfVal)}>
                    {typeof Translated === 'string' || typeof Translated === 'number' ?
                        Translated :
                        beautifyKey(oneOfVal, oneOfSchema.get('tt'))}
                </option>

            }).valueSeq() : null}
        </select>
        <ValidityHelperText errors={errors} showValidity={showValidity} schema={schema}/>
    </div>
}));
