import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { ThemeProvider } from '../src'
import defaultTheme from '../src/theme/defaultTheme'

// Declare all themes
const themes = [defaultTheme]

export const parameters = {
    styledComponentsThemes: { themes },
    actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [withThemesProvider(themes, ThemeProvider)]
