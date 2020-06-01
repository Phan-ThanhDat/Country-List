import React from 'react'
import Country from '../Country'
import useStyles from './Countries.module'
import Card from '../../components/Card'
import { Countries as CountryType } from '../../types'

export interface ICountriesProps {
  list: CountryType[]
  searchTerm: string
}

const Countries: React.FC<ICountriesProps> = ({ list }: ICountriesProps) => {
  const classes = useStyles()

  const renderCountries =
    list.length > 0 &&
    list.map((c: CountryType) => (
      <Country
        hasAddBtn={true}
        country={c}
        key={c.name}
        name={c.name}
        flag={c.flag}
        region={c.region}
        languague={c.languages}
      />
    ))
  return <Card className={classes.root}>{renderCountries}</Card>
}

export default Countries
