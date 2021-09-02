import defaultTheme from './defaultTheme'

export type ThemeInterface = typeof defaultTheme

declare module "styled-components" {
    interface DefaultTheme extends ThemeInterface { }
}
