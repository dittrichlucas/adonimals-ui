import React, { PropsWithChildren } from 'react'

import { BaseBoxProps, boxMap } from './style'

export type BoxProps = PropsWithChildren<BaseBoxProps>

const Box = (props: BoxProps): JSX.Element => {
    const { children, element = 'div', ...others } = props
    const Component = boxMap[element]

    return (
        <Component { ...others }>{ children }</Component>
    )
}

export default Box
