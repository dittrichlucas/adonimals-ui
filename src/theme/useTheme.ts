import { useContext } from 'react'
import { DefaultTheme, ThemeContext } from 'styled-components'

const useTheme = (): { theme: DefaultTheme } => {
  const theme = useContext(ThemeContext)

  return { theme }
}

export { useTheme }
