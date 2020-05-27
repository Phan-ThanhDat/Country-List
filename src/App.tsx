import React, { useState, useEffect } from 'react'

import Home from './layouts/Home'
import { ThemeContext } from '../src/contexts/theme.context'
import { useTheme } from './hooks/useTheme'
import DrawerNav from './pages/DrawerNav'
import './App.css'

import { useSelector } from 'react-redux'
import { AppState } from './types'
import Loading from './components/Loading'
import useDispatchCountryLis from './hooks/useDispatchCountryList'

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

  const [loadingApp, setLoadingApp] = useState(true)

  const [loading] = useDispatchCountryLis('/all')

  useEffect(() => {
    setLoadingApp(loading)
  }, [loading])

  const a = useSelector((state: AppState) => state)
  // setdata(a)
  console.log(a)

  return (
    <>
      {loadingApp ? (
        <Loading />
      ) : (
        <ThemeContext.Provider value={theme}>
          <Home />
          <DrawerNav />
        </ThemeContext.Provider>
      )}
    </>
  )
}
