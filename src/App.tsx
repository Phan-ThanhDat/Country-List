import React from 'react'

import Routes from './Routes'
import Button, { ButtonVariants } from './components/Button'
import Loading from './components/Loading/Loading'
import Logo from './components/Logo'
import Notification from './components/Notification'

export default function App() {
  return (
    <>
      <Notification>This is Notification</Notification>
      <Logo company="Integrify"></Logo>
      <Button variant={ButtonVariants.Secondary}>Secondary</Button>
      <Loading />
      <Routes />
    </>
  )
}
