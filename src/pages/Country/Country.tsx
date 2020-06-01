import React from 'react'

import Card from '../../components/Card'
import { CardMedia, Typography } from '@material-ui/core'
import useStyles from './Country.module'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addCountryToCartRequest } from '../../redux/actions'
import { Countries as CountryType, AppState } from '../../types'

export type nativeName = { nativeName: string }

export interface ICountryProps {
  name: string
  flag: string
  languague: nativeName[]
  region: string
  country: CountryType
  className?: string
  hasAddBtn: boolean
}

const Country: React.FC<ICountryProps> = ({
  name,
  flag,
  region,
  languague,
  country,
  className,
  hasAddBtn,
}) => {
  const classes = useStyles()
  const dispatchAddCountry = useDispatch()

  const handleAddBtn = () => {
    dispatchAddCountry(addCountryToCartRequest({ country }))
  }
  const inCart: CountryType[] = useSelector(
    (state: AppState) => state.list.inCart
  )
  let isDisabled: boolean =
    inCart.find(
      (inCartCountry: CountryType) => inCartCountry.name === country.name
    ) !== undefined || false // return true if there's match

  return (
    <Card className={classes.wrapper}>
      <Typography className={classes.name} component="a">
        {name}
      </Typography>
      <CardMedia
        component="img"
        className={classes.media}
        image={flag}
        title={name}
      />
      <Typography className={classes.name} component="a">
        {languague.map((l) => {
          const lastIndex = languague[languague.length - 1]
          if (l !== lastIndex) return l.nativeName + ' - '
          else return l.nativeName
        })}
      </Typography>
      <Typography className={classes.name} component="a">
        {region}
      </Typography>
      {hasAddBtn && (
        <Button
          disabled={isDisabled}
          className={classes.button}
          onClick={handleAddBtn}
        >
          Add
        </Button>
      )}
    </Card>
  )
}

export default Country
