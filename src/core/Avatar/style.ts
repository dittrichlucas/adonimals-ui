import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import Box from '../Box'

export type AvatarProps =
    & SpaceProps
    & {
        src?: string
        alt?: string
        label?: string
    }

export const StyledAvatarBox = styled(Box)<AvatarProps>(({ theme, ...props }) => ({
    ...space({ theme, ...props }),
    width: '50px',
    height: '50px',
    color: theme.colors.greyscale['100'],
    backgroundColor: theme.colors.greyscale['050'],
    borderRadius: '50%'
}))

export const StyledAvatarImage = styled('img')(props => ({
    ...space(props),
    width: '50px',
    height: '50px',
    borderRadius: '50%'
}))

