import React, { PropsWithChildren } from 'react'

import { BaseTextProps, defaultElement, textMap } from './style'

export type TextProps = PropsWithChildren<BaseTextProps>

const Text = (props: TextProps): JSX.Element => {
    const { children, element, variant, ...other } = props
    const elementType = element || defaultElement[variant]
    const Component = textMap[elementType]

    return (
        <Component variant={ variant } { ...other }>{ children }</Component>
    )
}

export default Text
