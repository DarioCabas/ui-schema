import React from 'react';
import { WidgetProps } from '@ui-schema/ui-schema/Widget';
import { WithOnChange } from '@ui-schema/ui-schema/UIStore';
import { MuiWidgetBinding } from '@ui-schema/ds-material/widgetsBinding';
export declare const GenericListContentMemo: <P extends WidgetProps<MuiWidgetBinding<{}>>>({ storeKeys, schemaKeys, schema, listSize, onChange, showValidity, valid, errors, required, level, widgets, ComponentItemMore, ComponentItemPos, ComponentItem, ComponentFooter, btnAddShowLabel, btnAddStyle, btnSize: btnSizeProp, btnVariant: btnVariantProp, btnColor: btnColorProp, listSpacing, }: P & WithOnChange<import("../../../../ui-schema/src").UIStoreActions<import("@ui-schema/ui-schema/UIStore").UIStoreType<any>, import("../../../../ui-schema/src").UIStoreUpdaterData>> & import("@ui-schema/ds-material/BaseComponents/GenericList").GenericListContentProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
export declare const GenericList: (props: WidgetProps<MuiWidgetBinding> & WithOnChange) => React.ReactElement;
