import React, { useState } from 'react'
import { ThemeContext } from '../contexts/theme.context'

const themeDefault = {
  foreground: '#000000',
  background: '#eeeeee',
}

export const useTheme = (): ThemeContext => {
  const [theme, setTheme] = useState(themeDefault)

  const setCurrentTheme = React.useCallback((currentTheme): void => {
    setTheme(currentTheme)
  }, [])

  return {
    theme,
    setCurrentTheme,
  }
}
