import React from 'react';
import { showValidity, Errors, StoreSchemaType } from '@ui-schema/ui-schema/CommonTypings';
export interface ValidityHelperTextProps {
    showValidity: showValidity | undefined;
    errors?: Errors;
    schema: StoreSchemaType;
    browserError?: Node | React.ReactElement;
}
export interface LocaleHelperTextProps {
    text: string;
    schema: StoreSchemaType;
    context?: any;
    error?: boolean;
}
export declare const LocaleHelperText: React.FC<LocaleHelperTextProps>;
export declare const ValidityHelperText: React.FC<ValidityHelperTextProps>;
