import React, { PropsWithChildren } from 'react'

import Box from '../../Box'
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
        variant = 'text',
        color = 'default',
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
            <Box display='flex' flexDirection='row' py='spacing-xxxs' alignItems='center'>
                { prefix }
                <StyledTextField
                    id={ id }
                    value={ value }
                    type={ type }
                    onChange={ onChange }
                    placeholder={ placeholder }
                    disabled={ disabled }
                    variant= { variant }
                    color={ color }
                    error={ error }
                />
                { suffix }
            </Box>
        </StyledBox>
    )
}

export default TextField
