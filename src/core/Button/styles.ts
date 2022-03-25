import { MouseEvent } from 'react'
import styled from 'styled-components'
import {
    layout,
    LayoutProps,
    space,
    SpaceProps,
    variant
} from 'styled-system'

type ButtonVariants =
    | 'contained'
    | 'outlined'

type ButtonSize =
    | 'small'
    | 'medium'
    | 'large'

type ButtonColor =
    | 'primary'
    | 'secondary'

export type StyledButtonProps =
    & SpaceProps
    & LayoutProps
    & {
        variant: ButtonVariants
        size: ButtonSize
        disabled: boolean
        color: ButtonColor
        onClick?: (event?: MouseEvent<HTMLButtonElement>) => void
    }

export const StyledButton = styled('button')<StyledButtonProps>(({ theme, ...props }) => ({
    fontFamily: theme.fonts.fontFamily,
    borderRadius: '100px',
    fontSize: theme.fontSizes[12],
    fontWeight: '500',
    cursor: 'pointer',
    borderWidth: theme.radii[2],
    borderStyle: 'solid',
    transition: 'all 400ms ease-in-out',
    ...layout({ theme, ...props }),
    ...space({ theme, ...props }),
    ...variant({
        prop: 'size',
        variants: {
            small: {
                paddingTop: theme.space['spacing-xxxs'],
                paddingBottom: theme.space['spacing-xxxs'],
                paddingLeft: theme.space['spacing-xxs'],
                paddingRight: theme.space['spacing-xxs']
            },
            medium: {
                paddingTop: theme.space['spacing-xxs'],
                paddingBottom: theme.space['spacing-xxs'],
                paddingLeft: theme.space['spacing-xs'],
                paddingRight: theme.space['spacing-xs']
            },
            large: {
                paddingTop: theme.space['spacing-xs'],
                paddingBottom: theme.space['spacing-xs'],
                paddingLeft: theme.space['spacing-sm'],
                paddingRight: theme.space['spacing-sm']
            }
        }
    })({ theme, ...props }),
    ...variant({
        variants: {
            contained: {
                color: theme.colors.greyscale['100'],
                backgroundColor: theme.colors[props.color]['500'],
                boxShadow: '',
                borderColor: theme.colors.transparent,
                '&:hover': {
                    backgroundColor: theme.colors[props.color]['600']
                },
                '&:disabled': {
                    opacity: 0.4,
                    backgroundColor: theme.colors[props.color]['400']
                },
                '&:active': {
                    backgroundColor: theme.colors[props.color]['700']
                }
                // '&:focus': {
                //     backgroundColor: theme.colors[props.color]['600']
                // }
            },
            outlined: {
                color: theme.colors[props.color]['500'],
                backgroundColor: theme.colors.transparent,
                boxShadow: '',
                borderColor: theme.colors[props.color]['500'],
                '&:hover': {
                    borderColor: theme.colors[props.color]['600'],
                    color: theme.colors[props.color]['600']
                },
                '&:disabled': {
                    borderColor: theme.colors[props.color]['400'],
                    color: theme.colors[props.color]['400'],
                    opacity: 0.4
                },
                '&:active': {
                    borderColor: theme.colors[props.color]['700'],
                    color: theme.colors[props.color]['700']
                }
            }
        }
    })({ theme, ...props })
}))
