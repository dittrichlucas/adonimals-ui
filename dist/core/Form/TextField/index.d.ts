import { PropsWithChildren } from 'react';
import { StyledTextFieldProps } from './style';
declare type TextFieldProps = PropsWithChildren<StyledTextFieldProps>;
declare const TextField: (props: TextFieldProps) => JSX.Element;
export default TextField;
