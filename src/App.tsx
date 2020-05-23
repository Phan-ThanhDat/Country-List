import React from 'react'

import Routes from './Routes'
import Button, { ButtonVariants } from './components/Button'

export default function App() {
  return (
    <>
      <Button variant={ButtonVariants.Secondary}>Secondary</Button>
      <Routes />
    </>
  )
}
