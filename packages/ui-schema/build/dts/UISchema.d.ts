import { tt } from "@ui-schema/ui-schema/Utils";
export interface UISchema {
    title?: string;
    tt?: tt;
    t?: {
        [key: string]: string | number;
    } | {
        [key: string]: {
            [key: string]: string | number;
        };
    };
    widget?: string;
    api?: {
        endpoint: string;
    };
    hidden?: boolean;
    view?: {
        sizeXs?: number;
        sizeSm?: number;
        sizeMd?: number;
        sizeLg?: number;
        sizeXl?: number;
        noGrid?: boolean;
        spacing?: number;
        rows?: number;
        rowsMax?: number;
        variant?: string;
        margin?: string | 'none' | 'dense' | 'normal';
        dense?: boolean;
        denseOptions?: boolean;
        bg?: boolean;
        shrink?: boolean;
        formats?: string[];
        justify?: string;
        marks?: boolean | number[] | string[];
        marksLabel?: string;
        tooltip?: string;
        topControls?: boolean;
        alpha?: boolean;
        iconOn?: boolean;
        colors?: string[];
        btnSize?: 'normal' | 'medium' | 'small';
        track?: true | false | 'inverted';
        mt?: number;
        mb?: number;
    };
    date?: {
        format?: string;
        formatData?: string;
        keyboard?: boolean;
        views?: ('year' | 'date' | 'month' | 'hours' | 'minutes')[];
        variant?: string;
        autoOk?: boolean;
        disableFuture?: boolean;
        disablePast?: boolean;
        toolbar?: boolean;
        clearable?: boolean;
        minDate?: string;
        maxDate?: string;
        openTo?: 'year' | 'date' | 'month';
        orientation?: 'landscape' | 'portrait';
        tabs?: boolean;
        minutesStep?: number;
        ampm?: boolean;
    };
}
