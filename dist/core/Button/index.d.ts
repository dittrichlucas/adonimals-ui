import { MouseEvent } from 'react';
declare type ButtonProps = {
    label: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => {};
};
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
