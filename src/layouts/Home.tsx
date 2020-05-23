import React, { useContext } from 'react'

import Card from '../components/Card'
import TopBar from '../components/TopBar'
import Logo from '../components/Logo'

import { ThemeContext } from '../App'

export interface Props {}

const Home: React.FC<Props> = () => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <Card>
      <TopBar>
        <Logo company="Integrify" />
      </TopBar>
    </Card>
  )
}
export default Home
