import React, { MouseEventHandler } from 'react';
import { WithScalarValue } from '@ui-schema/ui-schema/UIStore';
import { WidgetProps } from '@ui-schema/ui-schema/Widget';
import { MuiWidgetBinding } from '@ui-schema/ds-material/widgetsBinding';
import { UIMetaReadContextType } from '@ui-schema/ui-schema/UIMetaReadContext';
export interface WidgetOptionsReadProps {
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
    style?: React.CSSProperties;
}
export declare const WidgetOptionsRead: React.ComponentType<WidgetProps<MuiWidgetBinding> & UIMetaReadContextType & WithScalarValue & WidgetOptionsReadProps>;
