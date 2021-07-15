import React from 'react'
import { TextFieldProps } from './style'

const TextField = (props: TextFieldProps) => {
    const {
        value,
        type,
        onChange,
        placeholder,
        disabled
    } = props

    return (
        <input
            value={ value }
            type={ type }
            onChange={ onChange }
            placeholder={ placeholder }
            disabled={ disabled }
        />
    )
}

export default TextField
