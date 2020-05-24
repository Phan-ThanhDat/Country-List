import React from 'react'

import Routes from './Routes'
import Home from './layouts/Home'
import { ThemeContext } from '../src/contexts/theme.context'
import { useTheme } from './hooks/useTheme'

// const themes = {
//   light: {
//     foreground: '#000000',
//     background: '#eeeeee',
//   },
//   dark: {
//     foreground: '#ffffff',
//     background: '# 222222',
//   },
// }

// export const ThemeContext = React.createContext(themes.light)

export default function App() {
  const theme = useTheme()
  console.log('App-> ', theme)
  return (
    <ThemeContext.Provider value={theme}>
      <Home />
      <Routes />
    </ThemeContext.Provider>
  )
}
