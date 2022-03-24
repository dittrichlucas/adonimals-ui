import { ColorProps, FlexboxProps, LayoutProps, SpaceProps } from 'styled-system';
export declare type BaseBoxProps = ColorProps & SpaceProps & LayoutProps & FlexboxProps & {
    color?: string;
    element?: BoxElements;
};
declare type BoxElements = 'header' | 'nav' | 'section' | 'article' | 'aside' | 'footer' | 'details' | 'summary' | 'div';
declare const Header: import("styled-components").StyledComponent<BoxElements, import("styled-components").DefaultTheme, ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LayoutProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & FlexboxProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    color?: string | undefined;
    element?: BoxElements | undefined;
}, never>;
export declare const boxMap: {
    [k in BoxElements]: typeof Header;
};
export {};
