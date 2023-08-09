import { Errors, StoreKeys, StoreSchemaType } from '@ui-schema/ui-schema';
import React from 'react';
import { InfoRendererProps } from '@ui-schema/ds-material';
export interface TitleBoxReadProps {
    hideTitle?: boolean;
    hasInfo?: boolean;
    schema: StoreSchemaType;
    storeKeys: StoreKeys;
    valid?: boolean;
    errors?: Errors;
    InfoRenderer?: React.ComponentType<InfoRendererProps>;
}
export declare const TitleBoxRead: React.ComponentType<TitleBoxReadProps>;
