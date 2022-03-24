import { ChangeEvent, ReactNode } from 'react'
import Box from '../../Box'
import styled from 'styled-components'
import {
    SizeProps,
    space,
    SpaceProps,
    variant
} from 'styled-system'

type TextFieldVariants =
    | 'outlined'
    | 'text'

type TextFieldColor =
    | 'default'
    | 'primary'
    | 'secondary'

export type StyledBoxProps = SpaceProps
    & SizeProps
    & {
        color: TextFieldColor
        error?: boolean
        disabled?: boolean
        variant: TextFieldVariants
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

export const colorUnion = (props: StyledBoxProps): 'error' | 'disabled' | TextFieldColor => {
    if (props.error) {
        return 'error'
    }

    if (props.disabled) {
        return 'disabled'
    }

    return props.color
}

export const StyledBox = styled(Box)<StyledBoxProps>(({ theme, ...props }) => ({
    padding: theme.space['spacing-xxs'],
    paddingLeft: theme.space['spacing-xs'],
    paddingRight: theme.space['spacing-xs'],
    borderRadius: theme.radii[4],
    ...space({ theme, ...props }),
    ...variant({
        prop: 'color',
        variants: {
            error: {
                color: theme.colors.feedback.error['900'],
                borderColor: theme.colors.feedback.error['900']
            },
            disabled: {
                color: theme.colors.greyscale['400'],
                borderColor: theme.colors.greyscale['400']
            },
            default: {
                color: theme.colors.greyscale['900'],
                borderColor: theme.colors.greyscale['800']
            },
            primary: {
                color: theme.colors.primary['900'],
                borderColor: theme.colors.primary['900']
            },
            secondary: {
                color: theme.colors.secondary['900'],
                borderColor: theme.colors.secondary['900']
            }
        }
    })({ theme, ...props, color: colorUnion(props) }),
    ...variant({
        variants: {
            outlined: {
                backgroundColor: 'transparent',
                borderWidth: theme.radii[2],
                borderStyle: 'solid'
            },
            text: {
                borderWidth: theme.radii[0],
                backgroundColor: theme.colors.greyscale['300'],
                borderBottomWidth: theme.radii[2],
                borderStyle: 'solid'
            }
        }
    })({ theme, ...props })
}))

export const StyledTextField = styled('input')<StyledTextFieldProps>(({ theme }) => ({
    fontFamily: theme.fonts.fontFamily,
    borderRadius: '5px',
    fontSize: theme.fontSizes[16],
    color: theme.colors.greyscale['800'],
    background: 'none',
    border: 'none',
    outline: 'none',
    flex: 1
}))
