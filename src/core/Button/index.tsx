import React, { HTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
} & HTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...otherProps }: ButtonProps) =>
    <button {...otherProps}>
        {children}
    </button>

export default Button
