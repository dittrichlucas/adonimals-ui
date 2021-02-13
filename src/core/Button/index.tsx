import React, { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...otherProps }: ButtonProps) =>
    <button {...otherProps}>
        {children}
    </button>

export default Button
