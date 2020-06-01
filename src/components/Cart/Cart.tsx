import React, { useEffect } from 'react'
import { IconButton, Divider, List, Drawer } from '@material-ui/core'
import clsx from 'clsx'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../types'
import Country from '../../pages/Country'
import { Countries as CountryType } from '../../types'
import { loadingInCartDAta } from '../../redux/actions'

export interface ICartProps {}
const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  cart: {
    marginLeft: '32px',
    color: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth * 3.5,
  },
  iconClose: {
    color: 'black',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}))

const Cart: React.FC<ICartProps> = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const dispatchInCart = useDispatch()
  const inCart = useSelector((state: AppState) => state.list.inCart)
  useEffect(() => {
    dispatchInCart(loadingInCartDAta())
  }, [dispatchInCart])

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.cart, classes.menuButton, open && classes.hide)}
      >
        <ShoppingCartIcon />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton className={classes.iconClose} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {inCart.length > 0 &&
            inCart.map((c: CountryType) => (
              <Country
                hasAddBtn={false}
                country={c}
                key={c.name}
                name={c.name}
                flag={c.flag}
                region={c.region}
                languague={c.languages}
              />
            ))}
        </List>
      </Drawer>
    </>
  )
}
export default Cart
