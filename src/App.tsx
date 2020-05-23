import React from 'react'

import Routes from './Routes'
import Button, { ButtonVariants } from './components/Button'
import Loading from './components/Loading/Loading'
import Logo from './components/Logo'

export default function App() {
  return (
    <>
      <Logo company="Integrify"></Logo>
      <Button variant={ButtonVariants.Secondary}>Secondary</Button>
      <Loading />
      <Routes />
    </>
  )
}
