import React from 'react'

import Card from '../../components/Card'
import { CardMedia, Typography } from '@material-ui/core'
import useStyles from './Country.module'
import Button from '../../components/Button'

export interface ICountryProps {}

const Country: React.FC<ICountryProps> = () => {
  const classes = useStyles()

  return (
    <Card className={classes.wrapper}>
      <Typography className={classes.name} component="a">
        Finland
      </Typography>
      <CardMedia
        component="img"
        className={classes.media}
        image="https://taimienphi.vn/tmp/cf/aut/anh-dep-2.jpg"
        title="Contemplative Reptile"
      />
      <Typography className={classes.name} component="a">
        Danmark, Sweden, Norway
      </Typography>
      <Button className={classes.button}> Remove</Button>
    </Card>
  )
}

export default Country
