import React, { PropsWithChildren } from 'react'
import { StyledButton, StyledButtonProps } from './styles'

export type ButtonProps = PropsWithChildren<StyledButtonProps>

const Button = (props: ButtonProps): JSX.Element => {
    const { children, color = 'primary', ...other } = props

    return (
        <StyledButton color={ color } { ...other } >{ children }</StyledButton>
    )
}

export default Button
