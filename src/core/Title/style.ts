import styled from 'styled-components'
import { variant, space, SpaceProps } from 'styled-system'
import "@fontsource/fira-sans/400.css"

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
    | 'heading4'
    | 'heading5'
    | 'heading6'

export type HeadingProps = {
    variant: TitleVariants,
    element?: TitleElements
} & SpaceProps

const createTitle = (element: TitleElements) => styled(element)<HeadingProps>(
    space,
    {
        appearance: 'none',
        fontFamily: 'Fira Sans',
    },
    variant({
        variants: {
            heading1: {
                fontSize: '64px',
                lineHeight: '72px',
                color: 'black'
            },
            heading2: {
                fontSize: '56px',
                lineHeight: '64px',
                color: 'black'
            },
        }
    })
)

const Heading1 = createTitle('h1') // styled('h1')(...)
const Heading2 = createTitle('h2') // styled('h2')(...)
const Heading3 = createTitle('h3') // styled('h3')(...)
const Heading4 = createTitle('h4') // styled('h4')(...)
const Heading5 = createTitle('h5') // styled('h5')(...)
const Heading6 = createTitle('h6') // styled('h6')(...)

export const defaultElement: { [k in TitleVariants]: TitleElements } = {
    heading1: 'h1',
    heading2: 'h2',
    heading3: 'h3',
    heading4: 'h4',
    heading5: 'h5',
    heading6: 'h6',
}

export const titleMap: { [k in TitleElements]: typeof Heading1 } = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    h6: Heading6,
}
