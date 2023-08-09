import React from 'react';
import { WidgetProps, WithValue } from '@ui-schema/ui-schema';
import { TableRendererBaseProps, TableRendererExtractorProps } from '@ui-schema/ds-material/BaseComponents/Table/TableTypes';
import { ListButtonOverwrites } from '@ui-schema/ds-material/Component';
export declare const TableRendererBase: React.ComponentType<Pick<WidgetProps, Exclude<keyof WidgetProps, 'value' | 'errors' | 'valid'>> & Pick<WithValue, 'onChange'> & TableRendererBaseProps & ListButtonOverwrites>;
export declare const TableRendererBaseMemo: React.FunctionComponent<Pick<WidgetProps<import("@ui-schema/ui-schema").WidgetsBindingFactory<{}, {}, {}>>, "t" | "required" | "showValidity" | "storeKeys" | "isVirtual" | "widgets" | "noGrid" | "schema" | "parentSchema" | "level" | "ownKey"> & Pick<WithValue<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>>, "onChange"> & TableRendererBaseProps & ListButtonOverwrites>;
export declare const TableRendererExtractor: React.ComponentType<WidgetProps & WithValue & TableRendererExtractorProps>;
export declare const TableRendererMemo: React.ComponentType<WidgetProps<import("@ui-schema/ui-schema").WidgetsBindingFactory<{}, {}, {}>> & WithValue<import("@ui-schema/ui-schema").UIStoreActions<import("@ui-schema/ui-schema").UIStoreType<any>, import("@ui-schema/ui-schema").UIStoreUpdaterData>> & TableRendererExtractorProps>;
export declare const TableRenderer: React.ComponentType<WidgetProps<import("@ui-schema/ui-schema").WidgetsBindingFactory<{}, {}, {}>> & TableRendererExtractorProps>;
