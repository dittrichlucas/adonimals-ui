import styled from 'styled-components'
import {
    space,
    variant,
    layout,
    ColorProps,
    SpaceProps,
    LayoutProps
} from 'styled-system'

type ButtonVariants =
    | 'contained'
    | 'outlined'
    | 'text'

type ButtonSize =
    | 'small'
    | 'medium'
    | 'large'

type ButtonColor =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'disable'

export type StyledButtonProps =
    & SpaceProps
    & ColorProps
    & LayoutProps
    & {
        variant: ButtonVariants,
        size: ButtonSize
        disabled: boolean,
        color: ButtonColor
        backgroundColor: string
    }

export const StyledButton = styled('button')<StyledButtonProps>(({ theme, ...props }) => ({
    fontFamily: theme.fonts.fontFamily,
    borderRadius: '5px',
    fontSize: theme.fontSizes[16],
    fontWeight: 'bold',
    cursor: 'pointer',
    borderWidth: theme.radii[2],
    borderStyle: 'solid',
    ...layout({ theme, ...props }),
    ...space({ theme, ...props }),
    ...variant({
        prop: 'size',
        variants: {
            small: {
                paddingTop: theme.space['spacing-xs'],
                paddingBottom: theme.space['spacing-xs'],
                paddingLeft: theme.space['spacing-lg'],
                paddingRight: theme.space['spacing-lg']
            },
            medium: {
                paddingTop: theme.space['spacing-sm'],
                paddingBottom: theme.space['spacing-sm'],
                paddingLeft: theme.space['spacing-xxl'],
                paddingRight: theme.space['spacing-xxl']
            },
            large: {
                paddingTop: theme.space['spacing-md'],
                paddingBottom: theme.space['spacing-md'],
                paddingLeft: theme.space['spacing-xxxl'],
                paddingRight: theme.space['spacing-xxxl']
            }
        }
    })({ theme, ...props }),
    ...variant({
        variants: {
            contained: {
                color: theme.colors.secondary['080'],
                backgroundColor: theme.colors.primary['120'],
                boxShadow: '',
                borderColor: theme.colors.transparent
            },
            outlined: {
                color: theme.colors.primary['120'],
                backgroundColor: theme.colors.secondary['080'],
                boxShadow: '',
                borderColor: theme.colors.primary['120']
            },
            text: {
                color: theme.colors.primary['120'],
                backgroundColor: theme.colors.secondary['080'],
                boxShadow: '',
                borderColor: theme.colors.secondary['080']
            }
        }
    })({ theme, ...props })
}))
