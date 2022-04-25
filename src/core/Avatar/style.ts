import Box from '../Box'
import styled from 'styled-components'
import { space, SpaceProps, variant } from 'styled-system'

type AvatarVariants =
    | 'large'
    | 'extralarge'

export type AvatarProps =
    & SpaceProps
    & {
        variant: AvatarVariants
        src?: string
        alt?: string
        label?: string
    }

export const StyledAvatarBox = styled(Box)<AvatarProps>(({ theme, ...props }) => ({
    ...space({ theme, ...props }),
    ...variant({
        variants: {
            large: {
                color: theme.colors.greyscale['100'],
                backgroundColor: theme.colors.greyscale['900'],
                width: '48px',
                height: '48px',
                borderRadius: '8px'
            },
            extralarge: {
                color: theme.colors.greyscale['100'],
                backgroundColor: theme.colors.greyscale['900'],
                width: '64px',
                height: '64px',
                borderRadius: '8px'
            }
        }
    })({ theme, ...props })
}))

export const StyledAvatarImage = styled('img')<AvatarProps>(({ theme, ...props }) => ({
    ...space({ theme, ...props }),
    ...variant({
        variants: {
            large: {
                width: '48px',
                height: '48px',
                borderRadius: '8px'
            },
            extralarge: {
                width: '64px',
                height: '64px',
                borderRadius: '8px'
            }
        }
    })({ theme, ...props })
}))

