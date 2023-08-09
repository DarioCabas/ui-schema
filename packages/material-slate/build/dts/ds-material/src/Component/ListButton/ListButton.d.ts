import { ButtonProps } from '@mui/material/Button';
import { IconButtonProps } from '@mui/material/IconButton';
import React from 'react';
export interface ListButtonOverwrites {
    btnSize?: IconButtonProps['size'];
    btnVariant?: ButtonProps['variant'];
    btnColor?: ButtonProps['color'];
}
export interface ListButtonProps extends ListButtonOverwrites {
    onClick: () => void;
    Icon?: React.ComponentType<{
        fontSize?: 'inherit' | 'small' | 'medium' | 'large';
        style?: React.CSSProperties;
    }>;
    title: React.ReactElement | string;
    style?: React.CSSProperties;
    showLabel?: boolean;
}
export declare const ListButton: React.ComponentType<ListButtonProps>;
