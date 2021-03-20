import React, { PropsWithChildren } from 'react'
import { TitleElements, TitleVariants, HeadingProps, titleMap, defaultElement } from './style'

export type TitleProps = PropsWithChildren<HeadingProps>

const Title = (props: TitleProps) => {
    const { children, element, variant, ...other } = props
    const elementType = element || defaultElement[variant]
    const Component = titleMap[elementType]

    return (
        <Component variant={variant} {...other}>{children}</Component>
    )
}

export default Title
