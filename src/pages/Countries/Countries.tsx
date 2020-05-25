import React from 'react'
import Country from '../Country'

import useStyles from './Countries.module'
import Card from '../../components/Card'

export interface ICountriesProps {}

const Countries: React.FC<ICountriesProps> = () => {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <Country></Country>
      <Country></Country>
      <Country></Country>
      <Country></Country>
      <Country></Country>
      <Country></Country>
      <Country></Country>
    </Card>
  )
}

export default Countries
