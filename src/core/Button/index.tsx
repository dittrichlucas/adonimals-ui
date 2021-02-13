import React, { MouseEvent } from 'react'

type ButtonProps = {
    label: string
    onClick: (event: MouseEvent<HTMLButtonElement>) => {}
}

const Button = (props: ButtonProps) =>
    <button onClick={props.onClick}>
        {props.label}
    </button>

export default Button
