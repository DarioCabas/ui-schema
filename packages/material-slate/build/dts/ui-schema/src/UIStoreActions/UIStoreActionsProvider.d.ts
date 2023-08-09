import React from 'react';
import { onChangeHandler } from '@ui-schema/ui-schema/UIStore';
import { UIStoreActions } from '@ui-schema/ui-schema/UIStoreActions';
export interface UIStoreActionsContext<A = UIStoreActions> {
    onChange: onChangeHandler<A>;
}
export declare function UIStoreActionsProvider<A = UIStoreActions>({ children, onChange, }: React.PropsWithChildren<UIStoreActionsContext<A>>): React.ReactElement;
export declare function useUIStoreActions<A = UIStoreActions>(): UIStoreActionsContext<A>;
