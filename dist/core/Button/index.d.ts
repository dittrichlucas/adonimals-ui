import { MouseEvent, ReactNode } from 'react';
declare type ButtonProps = {
    children: ReactNode;
    onClick: (event?: MouseEvent<HTMLButtonElement>) => void;
};
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
