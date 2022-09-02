import styled from 'styled-components'

import { color, ColorProps } from 'styled-system'

export type IconProps = ColorProps
& {
    size?: number,
    color?: string
}

export const IconWrapper = styled.div<ColorProps>(props => ({
    ...color(props)
}))
