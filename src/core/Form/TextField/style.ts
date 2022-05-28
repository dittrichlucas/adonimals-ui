import { ChangeEvent } from 'react'

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
        prefix?: string
        suffix?: string
        label?: string
        spellCheck?: boolean
        onChange?: (event?: ChangeEvent<HTMLInputElement>) => void
    }

type CustomSpace = {
    prefixWidth: number,
    suffixWidth: number
}

type AdornmentProps = Pick<StyledTextFieldProps, 'label'> & { position: 'left' | 'right' }

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
    position: 'relative',
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

export const StyledTextField = styled('input')<StyledTextFieldProps & CustomSpace>(({ theme, ...props }) => ({
    paddingTop: `${theme.space['spacing-xxs']}px`,
    paddingBottom: `${theme.space['spacing-xxs']}px`,
    paddingLeft: props.prefixWidth || theme.space['spacing-xs'],
    paddingRight: props.suffixWidth || theme.space['spacing-xs'],
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

export const Adornment = styled('div')<AdornmentProps>(({ theme, label, position }) => ({
    position: 'absolute',
    margin: 'auto',
    paddingTop: label ? theme.space['spacing-sm'] : 0,
    paddingLeft: theme.space['spacing-xs'],
    paddingRight: theme.space['spacing-xs'],
    height: theme.space['spacing-md'],
    top: 0,
    bottom: 0,
    left: position === 'left' ? 0 : ' unset',
    right: position === 'right' ? 0 : ' unset',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))
