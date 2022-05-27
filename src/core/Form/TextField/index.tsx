import React, { PropsWithChildren } from 'react'

import Text from '../../Text'
import {
    StyledBox,
    StyledTextField,
    StyledTextFieldProps
} from './style'

type TextFieldProps = PropsWithChildren<StyledTextFieldProps>

const TextField = (props: TextFieldProps): JSX.Element => {
    const {
        id,
        value,
        type,
        onChange,
        placeholder,
        disabled,
        error,
        prefix,
        suffix,
        label
    } = props

    return (
        <StyledBox display='flex' flexDirection='column' { ...props }>
            <Text color='inherit' variant='b2' element='label' htmlFor={ id }>
                { label }
            </Text>
                { prefix }
                <StyledTextField
                    id={ id }
                    value={ value }
                    type={ type }
                    onChange={ onChange }
                    placeholder={ placeholder }
                    disabled={ disabled }
                    error={ error }
                />
                { suffix }
        </StyledBox>
    )
}

export default TextField
