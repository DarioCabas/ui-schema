import React from 'react'
import { UISchemaDragDropContext, DragDropAdvancedContextType } from './useDragDropContext'

export interface DragDropProviderProps {
    contextValue: DragDropAdvancedContextType
    children?: React.ReactNode
}

export const DragDropProvider: React.ComponentType<DragDropProviderProps> = (
    {contextValue, children}
) => {
    return <UISchemaDragDropContext.Provider value={contextValue}>
        {children}
    </UISchemaDragDropContext.Provider>
}
