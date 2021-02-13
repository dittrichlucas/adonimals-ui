import { HTMLAttributes, ReactNode } from 'react';
declare type ButtonProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;
declare const Button: ({ children, ...otherProps }: ButtonProps) => JSX.Element;
export default Button;
