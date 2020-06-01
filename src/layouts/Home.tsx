import React, { useContext } from 'react'

import Card from '../components/Card'
import TopBar from '../components/TopBar'
import Logo from '../components/Logo'
import { ThemeContext } from '../contexts/theme.context'
import Button from '../components/Button'

export interface Props {}

const Home: React.FC<Props> = () => {
  const theme = useContext(ThemeContext)

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

  // const a = React.useMemo(() => {
  //   theme.setCurrentTheme(newTheme)
  // }, [newTheme, theme.setCurrentTheme])

  const handleChangeTheme = () => {
    if (JSON.stringify(theme.theme) === JSON.stringify(themes.dark)) {
      theme.setCurrentTheme(themes.light)
    } else {
      theme.setCurrentTheme(themes.dark)
    }
  }

  console.log(theme)
  return (
    <Card>
      <TopBar>
        <Button onClick={handleChangeTheme}>Change Theme</Button>
        <Logo company="Integrify" />
      </TopBar>
    </Card>
  )
}

export default Home
