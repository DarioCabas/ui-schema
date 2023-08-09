import React from 'react';
import { WidgetProps } from '@ui-schema/ui-schema';
import { MuiWidgetBinding } from '@ui-schema/ds-material/widgetsBinding';
export interface OptionsCheckRendererProps {
    row?: boolean;
}
export declare const OptionsCheck: React.ComponentType<WidgetProps<MuiWidgetBinding> & OptionsCheckRendererProps>;
