import React, { PropsWithChildren } from 'react'

import { defaultElement, HeadingProps, titleMap } from './style'

export type TitleProps = PropsWithChildren<HeadingProps>

const Title = (props: TitleProps): JSX.Element => {
    const { children, element, variant, ...other } = props
    const elementType = element || defaultElement[variant]
    const Component = titleMap[elementType]

    return (
        <Component variant={ variant } { ...other }>{ children }</Component>
    )
}

export default Title
