import React from 'react'
import Country from '../Country'
import useStyles from './Countries.module'
import Card from '../../components/Card'
import { Countries as CountryType } from '../../types'
import { Typography } from '@material-ui/core'

export interface ICountriesProps {
  list: CountryType[]
  searchTerm: string
}

const Countries: React.FC<ICountriesProps> = ({
  list,
  searchTerm,
}: ICountriesProps) => {
  const classes = useStyles()

  const isNullOrWhitespace = (input: string): boolean => {
    if (typeof input === 'undefined' || input == null) return true
    return input.replace(/\s/g, '').length < 1
  }

  const renderCountries =
    list.length > 0 &&
    list.map((c: CountryType) => (
      <Country
        key={c.name}
        name={c.name}
        flag={c.flag}
        region={c.region}
        languague={c.languages}
      />
    ))

  const isNotRenderCountryList = isNullOrWhitespace(searchTerm)
  console.log(searchTerm)
  return (
    <>
      {isNotRenderCountryList && (
        <Typography component="h2"> No any country</Typography>
      )}
      {!isNotRenderCountryList && (
        <Card className={classes.root}>{renderCountries}</Card>
      )}
    </>
  )
}

export default Countries
