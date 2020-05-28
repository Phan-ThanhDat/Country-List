import React from 'react'

import Card from '../../components/Card'
import { CardMedia, Typography } from '@material-ui/core'
import useStyles from './Country.module'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addCountryToCartRequest } from '../../redux/actions'
import { Countries as CountryType, AppState } from '../../types'
import Loading from '../../components/Loading'

export type nativeName = { nativeName: string }

export interface ICountryProps {
  name: string
  flag: string
  languague: nativeName[]
  region: string
  country: CountryType
  className?: string
}

const Country: React.FC<ICountryProps> = ({
  name,
  flag,
  region,
  languague,
  country,
  className,
}) => {
  const classes = useStyles()
  const dispatchAddCountry = useDispatch()
  const [loading, setLoading] = React.useState(true)

  const handleAddBtn = () => {
    console.log('addd suceess')
    dispatchAddCountry(addCountryToCartRequest({ country }))
  }

  const loadingAddCountry = useSelector((state: AppState) => state.list.loading)
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(loadingAddCountry)
    }, 1000)
  }, [loadingAddCountry])

  return (
    <>
      {!loading ? (
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
          <Button className={classes.button} onClick={handleAddBtn}>
            Add
          </Button>
        </Card>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Country
