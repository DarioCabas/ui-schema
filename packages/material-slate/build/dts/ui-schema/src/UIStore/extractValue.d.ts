import React from 'react';
import { StoreKeys, WithValue, ExtractValueOverwriteProps } from '@ui-schema/ui-schema/UIStore';
import { UIStoreActions } from '@ui-schema/ui-schema/UIStoreActions';
export declare function extractValue<A = UIStoreActions, P extends Partial<WithValue<A>> & {
    storeKeys: StoreKeys;
} = Partial<WithValue<A>> & {
    storeKeys: StoreKeys;
}>(Component: React.ComponentType<P>): React.ComponentType<Omit<P, keyof WithValue<A>> & ExtractValueOverwriteProps>;
