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
    | 'bb1'
    | 'b1'
    | 'bb2'
    | 'b2'

const createText = (element: TextElements) => styled(element)<BaseTextProps>(({ theme, ...props }) => ({
    fontFamily: theme.fonts.fontFamily,
    color: theme.colors.greyscale['900'],
    ...space({ theme, ...props }),
    ...color({ theme, ...props }),
    ...variant({
        variants: {
            bb1: {
                fontSize: theme.fontSizes[16],
                lineHeight: theme.lineHeights[24],
                fontWeight: '600'
            },
            b1: {
                fontSize: theme.fontSizes[16],
                lineHeight: theme.lineHeights[24],
                fontWeight: '400'
            },
            bb2: {
                fontSize: theme.fontSizes[12],
                lineHeight: theme.lineHeights[20],
                fontWeight: '600'
            },
            b2: {
                fontSize: theme.fontSizes[12],
                lineHeight: theme.lineHeights[20],
                fontWeight: '400'
            }
        }
    })({ theme, ...props })
}))

const Caption = createText('caption')
const Label = createText('label')
const Paragraph = createText('p')
const Span = createText('span')

export const defaultElement: { [k in TextVariants]: TextElements } = {
    bb1: 'p',
    b1: 'p',
    bb2: 'span',
    b2: 'span'
}

export const textMap: { [k in TextElements]: typeof Caption } = {
    caption: Caption,
    label: Label,
    p: Paragraph,
    span: Span
}
