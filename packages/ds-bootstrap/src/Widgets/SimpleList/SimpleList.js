import React from 'react';
import {TranslateTitle} from '@ui-schema/react/TranslateTitle';
import {memo} from '@ui-schema/react/Utils/memo';
import {extractValue} from '@ui-schema/react/UIStore';
import {WidgetEngine} from '@ui-schema/react/WidgetEngine';
import {List} from 'immutable';
import {ValidityHelperText} from '../../Component/LocaleHelperText';
import {IconPlus, IconMinus} from '@ui-schema/ds-bootstrap/Component/Icons/Icons';

const SimpleList = extractValue(memo(({
                                          storeKeys, schema, value, onChange,
                                          showValidity, errors, required,
                                      }) => {

    let btnSize = schema.getIn(['view', 'btnSize']) || 'small';

    let classFormGroup = ['form-group', 'd-flex', 'align-items-center'];
    let classFormControl = ['form-control'];
    if(showValidity && errors.hasError()) {
        classFormControl.push('is-invalid');
    }
    if(showValidity && !errors.hasError()) {
        classFormGroup.push('was-validated');
    }

    return <React.Fragment>
        <TranslateTitle schema={schema} storeKeys={storeKeys}/>
        <div>
            {value ? value.map((val, i) =>
                <div
                    key={i}
                    className={classFormGroup.join(' ')}>
                    <WidgetEngine
                        className={classFormControl.join(' ')}
                        showValidity={showValidity}
                        storeKeys={storeKeys.push(i)}
                        parentSchema={schema}
                        schema={schema.get('items')}
                        required={required}
                        noGrid
                    />
                    <div>
                        <IconMinus
                            btnSize={btnSize}
                            onClick={() => {
                                onChange({
                                    storeKeys,
                                    scopes: ['value'],
                                    type: 'update',
                                    updater: ({value: storeValue}) => ({value: storeValue.splice(i, 1)}),
                                    schema,
                                    required,
                                })
                            }}/>
                    </div>
                </div>,
            ).valueSeq() : null}
            <div>
                <IconPlus
                    btnSize={btnSize}
                    onClick={() => {
                        onChange({
                            storeKeys,
                            scopes: ['value'],
                            type: 'update',
                            updater: ({value: storeValue = List()}) => ({value: storeValue.push('')}),
                            schema,
                            required,
                        })
                    }}/>
            </div>
        </div>
        <ValidityHelperText
            /* only pass down errors which are not for a specific sub-schema */
            errors={errors}
            showValidity={showValidity}
            schema={schema}
        />
    </React.Fragment>
}));

export {SimpleList};
