import { LabelHTMLAttributes } from 'react';
import { ColorProps, SpaceProps } from 'styled-system';
export declare type BaseTextProps = SpaceProps & ColorProps & {
    variant: TextVariants;
    element?: TextElements;
    color?: string;
    htmlFor?: LabelHTMLAttributes<HTMLLabelElement>['htmlFor'];
};
declare type TextElements = 'caption' | 'label' | 'p' | 'span';
declare type TextVariants = 'large' | 'medium' | 'small';
declare const Caption: import("styled-components").StyledComponent<TextElements, import("styled-components").DefaultTheme, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    variant: TextVariants;
    element?: TextElements | undefined;
    color?: string | undefined;
    htmlFor?: LabelHTMLAttributes<HTMLLabelElement>['htmlFor'];
}, never>;
export declare const defaultElement: {
    [k in TextVariants]: TextElements;
};
export declare const textMap: {
    [k in TextElements]: typeof Caption;
};
export {};
