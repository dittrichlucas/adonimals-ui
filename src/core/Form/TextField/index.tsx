import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'

import Text from '../../Text'
import {
    Adornment,
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
    const prefixRef = useRef<HTMLDivElement>(null)
    const suffixRef = useRef<HTMLDivElement>(null)
    const [prefixWidth, setPrefixWidth] = useState<number>(0)
    const [suffixWidth, setSuffixWidth] = useState<number>(0)

    useEffect(() => {
        setPrefixWidth(prefixRef.current?.clientWidth || 0)
    }, [prefix])

    useEffect(() => {
        setSuffixWidth(suffixRef.current?.clientWidth || 0)
    }, [suffix])

    return (
        <StyledBox display='flex' flexDirection='column' { ...props }>
            <Text paddingBottom='spacing-xxxs' color='inherit' variant='b2' element='label' htmlFor={ id }>
                { label }
            </Text>
            { !!prefix && <Adornment position='left' ref={ prefixRef } label={ label }>{ prefix }</Adornment> }
            <StyledTextField
                id={ id }
                value={ value }
                type={ type }
                onChange={ onChange }
                placeholder={ placeholder }
                disabled={ disabled }
                prefixWidth={ prefixWidth }
                suffixWidth={ suffixWidth }
                error={ error }
            />
            { !!suffix && <Adornment position='right' ref={ suffixRef } label={ label }>{ suffix }</Adornment> }
        </StyledBox>
    )
}

export default TextField
