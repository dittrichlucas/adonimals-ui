import React, { PropsWithChildren } from 'react'
import { StyledButton, StyledButtonProps } from './styles'

export type ButtonProps = PropsWithChildren<StyledButtonProps>

const Button = (props: ButtonProps): JSX.Element => {
    const { children, ...other } = props

    return (
        <StyledButton { ...other }>{ children }</StyledButton>
    )
}

export default Button
