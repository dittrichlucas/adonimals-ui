import { ChangeEvent, ReactNode } from 'react'

import Box from '../../Box'
import styled from 'styled-components'
import {
    SizeProps,
    space,
    SpaceProps,
    variant
} from 'styled-system'

export type StyledBoxProps = SpaceProps
    & SizeProps
    & {
        error?: boolean
        disabled?: boolean
    }

export type StyledTextFieldProps =
    & StyledBoxProps
    & {
        id?: string
        value?: string
        type?: 'text' | 'number' | 'password' | 'email'
        required?: boolean
        placeholder: string
        prefix?: ReactNode
        suffix?: ReactNode
        label?: string
        spellCheck?: boolean
        onChange?: (event?: ChangeEvent<HTMLInputElement>) => void
    }

export const colorUnion = (props: StyledBoxProps): 'error' | 'disabled' | 'default' => {
    if (props.error) {
        return 'error'
    }

    if (props.disabled) {
        return 'disabled'
    }

    return 'default'
}

export const StyledBox = styled(Box)<StyledBoxProps>(({ theme, ...props }) => ({
    ...space({ theme, ...props }),
    ':focus-within': {
        color: (!props.error && !props.disabled) && theme.colors.primary['900']
    },
    ...variant({
        prop: 'color',
        variants: {
            error: {
                color: theme.colors.feedback.error['500']
            },
            disabled: {
                color: theme.colors.greyscale['400']
            },
            default: {
                color: theme.colors.greyscale['800']
            }
        }
    })({ theme, ...props, color: colorUnion(props) })
}))

export const StyledTextField = styled('input')<StyledTextFieldProps>(({ theme, ...props }) => ({
    padding: `${theme.space['spacing-xxs']}px ${theme.space['spacing-xs']}px`,
    borderRadius: theme.radii[4],
    fontFamily: theme.fonts.fontFamily,
    fontSize: theme.fontSizes[16],
    color: theme.colors.greyscale['800'],
    background: 'none',
    borderWidth: 2,
    borderStyle: 'solid',
    outline: 'none',
    flex: 1,
    ':focus': {
        borderColor: (!props.error && !props.disabled) && theme.colors.primary['900']
    },
    '::placeholder': {
        color: theme.colors.greyscale['500']
    },
    ...variant({
        prop: 'color',
        variants: {
            error: {
                borderColor: theme.colors.feedback.error['500']
            },
            disabled: {
                borderColor: theme.colors.greyscale['400'],
                backgroundColor: theme.colors.greyscale['100']
            },
            default: {
                borderColor: theme.colors.greyscale['500']
            }
        }
    })({ theme, ...props, color: colorUnion(props) })
}))
