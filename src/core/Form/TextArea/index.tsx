import React from 'react'

import { StyledBox } from '../TextField/style'
import Text from '../../Text'
import { StyledTextArea, TextAreaProps } from './style'

const TextArea = (props: TextAreaProps): JSX.Element => {
    const {
        id,
        value,
        placeholder,
        label,
        disabled,
        required,
        wrap,
        cols,
        rows,
        onChange
    } = props

    return (
        <StyledBox display='flex' flexDirection='column' { ...props }>
            <Text color='inherit' variant='b2' element='label' htmlFor={ id }>
                { label }
            </Text>
            <StyledTextArea
                id={ id }
                value= { value }
                onChange={ onChange }
                placeholder={ placeholder }
                disabled={ disabled }
                required={ required }
                wrap={ wrap }
                cols={ cols }
                rows={ rows }
            />
        </StyledBox>
    )
}

export default TextArea
