import { MouseEvent } from 'react';
import { ColorProps, SpaceProps, LayoutProps } from 'styled-system';
declare type ButtonVariants = 'contained' | 'outlined' | 'text';
declare type ButtonSize = 'small' | 'medium' | 'large';
declare type ButtonColor = 'default' | 'primary' | 'secondary' | 'disable';
export declare type StyledButtonProps = SpaceProps & ColorProps & LayoutProps & {
    variant: ButtonVariants;
    size: ButtonSize;
    disabled: boolean;
    color: ButtonColor;
    backgroundColor: string;
    onClick?: (event?: MouseEvent<HTMLButtonElement>) => void;
};
export declare const StyledButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    variant: ButtonVariants;
    size: ButtonSize;
    disabled: boolean;
    color: ButtonColor;
    backgroundColor: string;
    onClick?: ((event?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent> | undefined) => void) | undefined;
}, never>;
export {};
