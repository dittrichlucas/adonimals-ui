import React, { PropsWithChildren } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import defaultTheme from './defaultTheme'

type Props = {
    theme?: typeof defaultTheme
}

const ThemeProvider = ({ theme, children }: PropsWithChildren<Props>): JSX.Element => {
    const themeValue = theme || defaultTheme

    return (
        <StyledThemeProvider theme={ themeValue }>
            { children }
        </StyledThemeProvider>
    )
}

export default ThemeProvider
