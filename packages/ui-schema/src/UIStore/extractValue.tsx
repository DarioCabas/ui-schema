import React from 'react'
import { getDisplayName } from '@ui-schema/ui-schema/Utils/memo'
import { StoreKeys, useUIStore, WithValue, ExtractValueOverwriteProps } from '@ui-schema/ui-schema/UIStore'
import { useUIStoreActions } from '@ui-schema/ui-schema/UIStoreActions'

export const extractValue = <P extends Partial<WithValue> & { storeKeys: StoreKeys }>(Component: React.ComponentType<P>): React.ComponentType<Omit<P, keyof WithValue> & ExtractValueOverwriteProps> => {
    const ExtractValue = (p: Omit<P, keyof WithValue> & ExtractValueOverwriteProps) => {
        const {store, showValidity} = useUIStore()
        const {onChange} = useUIStoreActions()
        const values = store?.extractValues(p.storeKeys)
        // @ts-ignore
        return <Component
            // `showValidity` is overridable by render flow, e.g. nested Stepper
            {...p}
            showValidity={p.showValidity || showValidity}
            onChange={onChange}
            {...values || {}}
        />
    }
    ExtractValue.displayName = `ExtractValue(${getDisplayName(Component)})`
    return ExtractValue
}
