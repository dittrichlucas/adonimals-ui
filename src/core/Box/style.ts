import styled from 'styled-components'
import {
    color,
    ColorProps,
    flexbox,
    FlexboxProps,
    layout,
    LayoutProps,
    space,
    SpaceProps
} from 'styled-system'

export type BaseBoxProps =
    & ColorProps
    & SpaceProps
    & LayoutProps
    & FlexboxProps
    & {
        color?: string,
        element?: BoxElements
    }

type BoxElements =
    | 'header'
    | 'nav'
    | 'section'
    | 'article'
    | 'aside'
    | 'footer'
    | 'details'
    | 'summary'
    | 'div'

const createBox = (element: BoxElements) => styled(element)<BaseBoxProps>(props => ({
    ...space(props),
    ...layout(props),
    ...flexbox(props),
    ...color(props)
}))

const Header = createBox('header')
const Nav = createBox('nav')
const Section = createBox('section')
const Article = createBox('article')
const Aside = createBox('aside')
const Footer = createBox('footer')
const Details = createBox('details')
const Summary = createBox('summary')
const Div = createBox('div')

export const boxMap: { [k in BoxElements]: typeof Header } = {
    header: Header,
    nav: Nav,
    section: Section,
    article: Article,
    aside: Aside,
    footer: Footer,
    details: Details,
    summary: Summary,
    div: Div
}
