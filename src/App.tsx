import React from 'react'

import Routes from './Routes'
import Home from './layouts/Home'

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '# 222222',
  },
}

export const ThemeContext = React.createContext(themes.light)

export default function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Home />
      <Routes />
    </ThemeContext.Provider>
  )
}
