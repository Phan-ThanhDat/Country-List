import React from 'react'

export interface ThemeContext {
  theme: {}
  setCurrentTheme: (current: any) => void
}

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

export const THEME_DEFAULT_VALUE = {
  theme: themes.light,
  setCurrentTheme: () => {},
}

export const ThemeContext = React.createContext<ThemeContext>(
  THEME_DEFAULT_VALUE
)
