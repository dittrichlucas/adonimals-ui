import styled from 'styled-components'
import { color, space, SpaceProps, variant } from 'styled-system'

export type HeadingProps = {
    variant: TitleVariants,
    element?: TitleElements
} & SpaceProps

export type TitleElements =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'

export type TitleVariants =
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle3'

const createTitle = (element: TitleElements) => styled(element)<HeadingProps>(({ theme, ...props }) => ({
    fontFamily: theme.fonts.fontFamily,
    color: theme.colors.greyscale['900'],
    ...space({ theme, ...props }),
    ...color({ theme, ...props }),
    ...variant({
        variants: {
            heading1: {
                fontSize: theme.fontSizes[64],
                lineHeight: theme.lineHeights[72],
                fontWeight: '700'
            },
            heading2: {
                fontSize: theme.fontSizes[56],
                lineHeight: theme.lineHeights[64],
                fontWeight: '700'
            },
            heading3: {
                fontSize: theme.fontSizes[48],
                lineHeight: theme.lineHeights[56],
                fontWeight: '500'
            },
            subtitle1: {
                fontSize: theme.fontSizes[40],
                lineHeight: theme.lineHeights[48],
                fontWeight: '400'
            },
            subtitle2: {
                fontSize: theme.fontSizes[32],
                lineHeight: theme.lineHeights[40],
                fontWeight: '700',
                textTransform: 'uppercase'
            },
            subtitle3: {
                fontSize: theme.fontSizes[24],
                lineHeight: theme.lineHeights[32],
                fontWeight: '400',
                textTransform: 'uppercase'
            }
        }
    })({ theme, ...props })
}))

const Heading1 = createTitle('h1')
const Heading2 = createTitle('h2')
const Heading3 = createTitle('h3')
const Subtitle1 = createTitle('h4')
const Subtitle2 = createTitle('h5')
const Subtitle3 = createTitle('h6')

export const defaultElement: { [k in TitleVariants]: TitleElements } = {
    heading1: 'h1',
    heading2: 'h2',
    heading3: 'h3',
    subtitle1: 'h4',
    subtitle2: 'h5',
    subtitle3: 'h6'
}

export const titleMap: { [k in TitleElements]: typeof Heading1 } = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Subtitle1,
    h5: Subtitle2,
    h6: Subtitle3
}
