import { SpaceProps } from 'styled-system';
export declare type HeadingProps = {
    variant: TitleVariants;
    element?: TitleElements;
} & SpaceProps;
export declare type TitleElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export declare type TitleVariants = 'heading1' | 'heading2' | 'heading3' | 'heading4' | 'heading5' | 'heading6';
declare const Heading1: import("styled-components").StyledComponent<TitleElements, import("styled-components").DefaultTheme, {
    variant: TitleVariants;
    element?: TitleElements | undefined;
} & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol>, never>;
export declare const defaultElement: {
    [k in TitleVariants]: TitleElements;
};
export declare const titleMap: {
    [k in TitleElements]: typeof Heading1;
};
export {};
