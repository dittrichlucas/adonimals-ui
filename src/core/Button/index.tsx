import React, { PropsWithChildren } from 'react'
import { StyledButton } from './styles'

export type ButtonProps = PropsWithChildren<{
    variant?: 'primary' | 'secondary'
    disabled: boolean
}>

const Button = (props: ButtonProps) => {
    const { children, ...other } = props

    return (
        <StyledButton {...other}>{children}</StyledButton>
    )
}


export default Button
