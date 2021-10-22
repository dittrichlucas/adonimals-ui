import { ColorProps, SpaceProps, SizeProps } from 'styled-system';
declare type ButtonVariants = 'contained' | 'outlined' | 'text';
declare type ButtonSize = 'small' | 'medium' | 'large';
declare type ButtonColor = 'default' | 'primary' | 'secondary' | 'disable';
export declare type StyledButtonProps = SpaceProps & ColorProps & SizeProps & {
    variant: ButtonVariants;
    size: ButtonSize;
    disabled: boolean;
    color: ButtonColor;
    backgroundColor: string;
};
export declare const StyledButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & SizeProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Height<import("styled-system").TLengthStyledSystem>> & {
    variant: ButtonVariants;
    size: ButtonSize;
    disabled: boolean;
    color: ButtonColor;
    backgroundColor: string;
}, never>;
export {};
