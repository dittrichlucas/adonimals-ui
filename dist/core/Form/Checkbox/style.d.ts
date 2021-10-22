import { SizeProps, SpaceProps } from 'styled-system';
export declare type StyledCheckboxProps = SpaceProps & SizeProps & {
    id?: string;
    label: string;
    checked: boolean;
    onChange: () => void;
};
export declare const Icon: import("styled-components").StyledComponent<"svg", import("styled-components").DefaultTheme, {}, never>;
export declare const HiddenCheckbox: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, {
    type: "chekbox";
}, "type">;
export declare const StyledCheckbox: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    checked: boolean;
}, never>;
