import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '../'
import defaultTheme from '../theme/defaultTheme'


// screen
export const renderWithTheme = (children: React.ReactElement) => {
  return render(
    <ThemeProvider theme={defaultTheme}>
      {children}
    </ThemeProvider>
  )
}
