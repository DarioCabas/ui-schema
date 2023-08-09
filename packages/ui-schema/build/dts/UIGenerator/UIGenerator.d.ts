import React from 'react';
import { UIStoreContext } from '@ui-schema/ui-schema/UIStore';
import { UIMetaContext } from '@ui-schema/ui-schema/UIMeta';
import { UIRootRendererProps } from '@ui-schema/ui-schema/UIRootRenderer';
import { UIStoreActionsContext } from '@ui-schema/ui-schema/UIStoreActions';
/**
 * Main Component to create a schema based UI generator
 * @deprecated use the provider setup directly [migration notes](https://ui-schema.bemit.codes/updates/v0.3.0-v0.4.0#deprecations)
 */
export declare const UIGenerator: React.ComponentType<React.PropsWithChildren<UIMetaContext & UIStoreContext & UIStoreActionsContext & UIRootRendererProps>>;
/**
 * @deprecated use the provider setup directly [migration notes](https://ui-schema.bemit.codes/updates/v0.3.0-v0.4.0#deprecations)
 */
export declare const UIProvider: React.ComponentType<React.PropsWithChildren<UIMetaContext & UIStoreContext & UIStoreActionsContext>>;
