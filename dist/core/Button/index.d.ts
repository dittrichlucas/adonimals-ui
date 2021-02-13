import { ButtonHTMLAttributes, ReactNode } from 'react';
declare type ButtonProps = {
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;
declare const Button: ({ children, ...otherProps }: ButtonProps) => JSX.Element;
export default Button;
