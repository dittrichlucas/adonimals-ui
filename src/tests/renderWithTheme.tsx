import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '..'
import defaultTheme from '../theme/defaultTheme'

// TODO: Usar screen ao invés de render
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const renderWithTheme = (children: React.ReactElement) => {
  return render(
    <ThemeProvider theme={ defaultTheme }>
      { children }
    </ThemeProvider>
  )
}
