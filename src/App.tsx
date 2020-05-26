import React, { useState, useEffect } from 'react'

import Home from './layouts/Home'
import { ThemeContext } from '../src/contexts/theme.context'
import { useTheme } from './hooks/useTheme'
import DrawerNav from './pages/DrawerNav'
import './App.css'

import { getCountriesRequest } from './redux/actions/countries'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from './types'
import Loading from './components/Loading'

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

  const [loading, setLoading] = useState(true)
  const payload = {
    uri: '/all',
  }
  const b = useDispatch()
  useEffect(() => {
    b(
      getCountriesRequest(
        payload,
        () => {
          setLoading(false)
        },
        () => console.log('failed')
      )
    )
  }, [b, payload])

  const a = useSelector((state: AppState) => state)
  // setdata(a)
  console.log(a)

  return (
    <>
      {loading ? (
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
