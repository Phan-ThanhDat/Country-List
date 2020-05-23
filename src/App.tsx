import React from 'react'

import Routes from './Routes'
import Button, { ButtonVariants } from './components/Button'
import Loading from './components/Loading/Loading'

export default function App() {
  return (
    <>
      <Button variant={ButtonVariants.Secondary}>Secondary</Button>
      <Loading />
      <Routes />
    </>
  )
}
