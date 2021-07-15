import { ChangeEvent, ReactNode } from 'react'

export type TextFieldProps = {
    value?: string
    disabled?: boolean
    type?: 'text' | 'number' | 'password'
    required?: boolean
    error?: boolean
    placeholder: string
    prefix?: ReactNode
    suffix?: ReactNode
    label: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}
