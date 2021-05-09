import defaultTheme from './defaultTheme'

type ThemeInterface = typeof defaultTheme

declare module "styled-components" {
    interface DefaultTheme extends ThemeInterface { }
}
