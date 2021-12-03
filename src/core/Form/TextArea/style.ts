import { ChangeEvent } from 'react'
import styled from 'styled-components'
import { StyledBoxProps } from '../TextField/style'

export type TextAreaProps =
    & StyledBoxProps
    & {
        id?: string
        value?: string
        required?: boolean
        label: string
        placeholder?: string
        wrap?: string
        cols?: number
        rows?: number
        spellCheck?: boolean
        onChange?: (event?: ChangeEvent<HTMLTextAreaElement>) => void
    }

export const StyledTextArea = styled('textarea')(({ theme }) => ({
    fontFamily: theme.fonts.fontFamily,
    borderRadius: '5px',
    fontSize: theme.fontSizes[16],
    background: 'none',
    border: 'none',
    outline: 'none'
}))
