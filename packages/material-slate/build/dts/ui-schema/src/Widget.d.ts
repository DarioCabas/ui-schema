import * as React from 'react';
import { StoreKeyType, StoreKeys, UIStoreContext, WithOnChange, WithScalarValue } from '@ui-schema/ui-schema/UIStore';
import { Errors, required, valid, StoreSchemaType } from '@ui-schema/ui-schema/CommonTypings';
import { UIMetaContext } from '@ui-schema/ui-schema/UIMeta';
import { GroupRendererProps, WidgetsBindingFactory } from '@ui-schema/ui-schema/WidgetsBinding';
import { UIStoreActions } from '@ui-schema/ui-schema/UIStoreActions';
export type WidgetOverrideType<C extends {} = {}, P extends {} = {}, W = WidgetsBindingFactory, A = UIStoreActions> = React.ComponentType<P & WidgetProps<W> & C> | React.ComponentType<P & WidgetProps<W> & C & WithOnChange<A>> | React.ComponentType<P & WidgetProps<W> & C & WithScalarValue>;
export type WidgetType<C extends {} = {}, W = WidgetsBindingFactory, A = UIStoreActions> = WidgetOverrideType<C, {}, W, A>;
/**
 * Base widget props which are expected to exist no matter which data "type" the widget is for
 * - for only-scalar widgets add `WithScalarValue`
 * - for any-value-type widgets add `WithValue` and use the HOC `extractValue`
 * - `C` = custom `UIMetaContext` definition
 */
export interface WidgetProps<W = WidgetsBindingFactory> extends UIMetaContext<W> {
    schema: StoreSchemaType;
    parentSchema: StoreSchemaType | undefined;
    level: number;
    /**
     * the last index of the current widget
     * @deprecated use `storeKeys.last()` instead, internally it is still passed down, will be removed in `0.5.0` [migration notes](https://ui-schema.bemit.codes/updates/v0.3.0-v0.4.0#deprecations)
     */
    ownKey?: StoreKeyType;
    storeKeys: StoreKeys;
    required: required;
    errors?: Errors;
    valid?: valid;
    noGrid?: GroupRendererProps['noGrid'];
    isVirtual?: boolean;
    showValidity?: UIStoreContext['showValidity'];
}
