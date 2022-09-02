import { ChangeEvent } from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { colorUnion, StyledBoxProps } from '../TextField/style'

export type TextAreaProps =
    & StyledBoxProps
    & {
        id?: string
        value?: string
        required?: boolean
        label?: string
        placeholder?: string
        wrap?: string
        cols?: number
        rows?: number
        spellCheck?: boolean
        onChange?: (event?: ChangeEvent<HTMLTextAreaElement>) => void
    }

export const StyledTextArea = styled('textarea')<TextAreaProps>(({ theme, ...props }) => ({
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
