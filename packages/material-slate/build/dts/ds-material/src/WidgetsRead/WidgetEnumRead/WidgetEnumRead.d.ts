import { WidgetProps, WithScalarValue } from '@ui-schema/ui-schema';
import { MuiWidgetBinding } from '@ui-schema/ds-material/widgetsBinding';
import React, { MouseEventHandler } from 'react';
export interface WidgetEnumReadProps {
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
    style?: React.CSSProperties;
}
/**
 * @deprecated use `WidgetOptionsRead` instead
 */
export declare const WidgetEnumRead: React.ComponentType<WidgetProps<MuiWidgetBinding> & WithScalarValue & WidgetEnumReadProps>;
