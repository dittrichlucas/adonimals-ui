import styled from 'styled-components'
import { Box } from '../../index'

export type AvatarProps = { src?: string, alt?: string, label?: string }

export const StyledAvatarBox = styled(Box)<AvatarProps>(({ theme }) => ({
    width: '50px',
    height: '50px',
    color: theme.colors.greyscale['100'],
    backgroundColor: theme.colors.greyscale['050'],
    borderRadius: '50%'
}))

export const StyledAvatarImage = styled('img')(() => ({
    width: '50px',
    height: '50px',
    borderRadius: '50%'
}))

