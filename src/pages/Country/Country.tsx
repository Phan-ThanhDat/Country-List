import React from 'react'

import Card from '../../components/Card'
import { CardMedia, Typography } from '@material-ui/core'
import useStyles from './Country.module'
import Button from '../../components/Button'

export type nativeName = { nativeName: string }

export interface ICountryProps {
  name: string
  flag: string
  languague: nativeName[]
  region: string
}

const Country: React.FC<ICountryProps> = ({
  name,
  flag,
  region,
  languague,
}) => {
  const classes = useStyles()

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
      <Button className={classes.button}> Add</Button>
    </Card>
  )
}

export default Country
