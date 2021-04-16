import styled, { DefaultTheme } from 'styled-components'
import {
    space,
    variant,
    ColorProps,
    SpaceProps,
    SizeProps,
    size,
} from 'styled-system'
import "@fontsource/fira-sans/400.css"

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
    & SizeProps
    & {
        variant: ButtonVariants,
        size: ButtonSize
        disabled: boolean,
        color: ButtonColor
        backgroundColor: string
    }

// TODO: remove when using design tokens
const getSize = (size: ButtonSize, theme: DefaultTheme) => {
    switch (size) {
        case 'small':
            return [theme.space['spacing-xs'], theme.space['spacing-lg']]
        case 'medium':
            return [theme.space['spacing-sm'], theme.space['spacing-xxl']]
        default:
            return [theme.space['spacing-md'], theme.space['spacing-xxxl']]
    }
}

export const StyledButton = styled('button')<StyledButtonProps>(({ theme, ...props }) => ({
    paddingTop: getSize(props.size, theme)[0],
    paddingBottom: getSize(props.size, theme)[0],
    paddingLeft: getSize(props.size, theme)[1],
    paddingRight: getSize(props.size, theme)[1],
    fontFamily: theme.fonts.fontFamily,
    borderRadius: '5px',
    fontSize: theme.fontSizes[16],
    fontWeight: 'bold',
    cursor: 'pointer',
    borderWidth: theme.radii[2],
    borderStyle: 'solid',
    ...size(props),
    ...space(props),
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
    })(props),
}))
