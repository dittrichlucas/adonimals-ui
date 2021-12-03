import { ChangeEvent } from 'react';
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
    spellCheck?: boolean;
    onChange?: (event?: ChangeEvent<HTMLTextAreaElement>) => void;
};
export declare const StyledTextArea: import("styled-components").StyledComponent<"textarea", import("styled-components").DefaultTheme, {}, never>;
