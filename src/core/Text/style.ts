import { LabelHTMLAttributes } from 'react'
import styled from 'styled-components'
import { color, ColorProps, space, SpaceProps, variant } from 'styled-system'

export type BaseTextProps =
    & SpaceProps
    & ColorProps
    & {
        variant: TextVariants,
        element?: TextElements,
        color?: string
        htmlFor?: LabelHTMLAttributes<HTMLLabelElement>['htmlFor']
    }

type TextElements =
    | 'caption'
    | 'label'
    | 'p'
    | 'span'

type TextVariants =
    | 'large'
    | 'medium'
    | 'small'

const createText = (element: TextElements) => styled(element)<BaseTextProps>(({ theme, ...props }) => ({
    fontFamily: theme.fonts.fontFamily,
    color: theme.colors.greyscale['000'],
    ...space({ theme, ...props }),
    ...color({ theme, ...props }),
    ...variant({
        variants: {
            large: {
                fontSize: theme.fontSizes[20],
                lineHeight: theme.lineHeights[24]
            },
            medium: {
                fontSize: theme.fontSizes[16],
                lineHeight: theme.lineHeights[20]
            },
            small: {
                fontSize: theme.fontSizes[12],
                lineHeight: theme.lineHeights[16]
            }
        }
    })({ theme, ...props })
}))

const Caption = createText('caption')
const Label = createText('label')
const Paragraph = createText('p')
const Span = createText('span')

export const defaultElement: { [k in TextVariants]: TextElements } = {
    large: 'p',
    medium: 'span',
    small: 'span'
}

export const textMap: { [k in TextElements]: typeof Caption } = {
    caption: Caption,
    label: Label,
    p: Paragraph,
    span: Span
}
