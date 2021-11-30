import { StyledBoxProps } from '../TextField/style';
export declare type TextAreaProps = StyledBoxProps & {
    id?: string;
    value?: string;
    required?: boolean;
    label: string;
    placeholder?: string;
    wrap?: string;
    cols?: number;
    rows?: number;
    onChange?: () => void;
};
export declare const StyledTextArea: import("styled-components").StyledComponent<"textarea", import("styled-components").DefaultTheme, {}, never>;
