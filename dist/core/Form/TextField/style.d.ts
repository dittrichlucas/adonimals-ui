import { ChangeEvent, ReactNode } from 'react';
import { SizeProps, SpaceProps } from 'styled-system';
declare type TextFieldVariants = 'outlined' | 'text';
declare type TextFieldColor = 'default' | 'primary' | 'secondary';
export declare type StyledBoxProps = SpaceProps & SizeProps & {
    color: TextFieldColor;
    error?: boolean;
    disabled?: boolean;
    variant: TextFieldVariants;
};
export declare type StyledTextFieldProps = StyledBoxProps & {
    id?: string;
    value?: string;
    type?: 'text' | 'number' | 'password' | 'email';
    required?: boolean;
    placeholder: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
    label?: string;
    spellCheck?: boolean;
    onChange?: (event?: ChangeEvent<HTMLInputElement>) => void;
};
export declare const colorUnion: (props: StyledBoxProps) => 'error' | 'disabled' | TextFieldColor;
export declare const StyledBox: import("styled-components").StyledComponent<(props: import("../../Box").BoxProps) => JSX.Element, import("styled-components").DefaultTheme, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & SizeProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Height<import("styled-system").TLengthStyledSystem>> & {
    color: TextFieldColor;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    variant: TextFieldVariants;
}, never>;
export declare const StyledTextField: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & SizeProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Height<import("styled-system").TLengthStyledSystem>> & {
    color: TextFieldColor;
    error?: boolean | undefined;
    disabled?: boolean | undefined;
    variant: TextFieldVariants;
} & {
    id?: string | undefined;
    value?: string | undefined;
    type?: "number" | "password" | "text" | "email" | undefined;
    required?: boolean | undefined;
    placeholder: string;
    prefix?: ReactNode;
    suffix?: ReactNode;
    label?: string | undefined;
    spellCheck?: boolean | undefined;
    onChange?: ((event?: ChangeEvent<HTMLInputElement> | undefined) => void) | undefined;
}, never>;
export {};
