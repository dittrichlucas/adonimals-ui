import React from 'react'

import { IconProps } from './style'
import icons from './types'

type IconComponentProps = {
    name: keyof typeof icons
} & IconProps

const Icon: React.FC<IconComponentProps> = ({ name, size, color }) => {
    const Component = icons[name]

    return <Component size={ size } color={ color } />
}

export default Icon
