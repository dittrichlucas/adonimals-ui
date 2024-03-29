import React, { PropsWithChildren } from 'react'
import {
    StyledTextField,
    StyledTextFieldProps,
    StyledBox
} from './style'
import { Text } from '../../../index'
import Box from '../../Box'

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
            <Text color='inherit' variant='medium' element='label' htmlFor={ id }>
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
