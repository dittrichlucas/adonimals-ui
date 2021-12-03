import { SpaceProps } from 'styled-system';
export declare type AvatarProps = SpaceProps & {
    src?: string;
    alt?: string;
    label?: string;
};
export declare const StyledAvatarBox: import("styled-components").StyledComponent<(props: import("../Box").BoxProps) => JSX.Element, import("styled-components").DefaultTheme, SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    src?: string | undefined;
    alt?: string | undefined;
    label?: string | undefined;
}, never>;
export declare const StyledAvatarImage: import("styled-components").StyledComponent<"img", import("styled-components").DefaultTheme, {}, never>;
