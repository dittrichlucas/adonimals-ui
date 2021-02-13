import React, { MouseEvent, ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode
    onClick: (event?: MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: ButtonProps) =>
    <button onClick={props.onClick}>
        {props.children}
    </button>

export default Button
