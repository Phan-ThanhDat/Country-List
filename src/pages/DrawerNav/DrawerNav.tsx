import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import Countries from '../Countries'
import Search from '../Search'
import { useSelector } from 'react-redux'
import useDispatchCountryLis from '../../hooks/useDispatchCountryList'
import { AppState, Countries as CountryType } from '../../types'
import Loading from '../../components/Loading'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    boxSizing: 'border-box',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  TBar: {
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '998px',
  },
  wrapperSearch: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    color: 'white',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: 'white',
  },
  iconButton: {
    padding: 10,
  },
  searchIcon: {
    color: 'white',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
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
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    maxWidth: '1280px',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '998px',
    marginTop: '56px',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

interface IPersistentDrawerLeftProps {
  handleSearchChangeProp?: (seachChangeTerm: any) => void
}

const PersistentDrawerLeft: React.FC<IPersistentDrawerLeftProps> = ({
  handleSearchChangeProp,
}: IPersistentDrawerLeftProps) => {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const typingRefTimeoutSearch = React.useRef<number | null>(0)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }
  const [searchTerm, setSearchTerm] = React.useState<string>('')
  const [list, setList] = React.useState<CountryType[]>([])
  const [loading] = useDispatchCountryLis('/all')
  const contryList = useSelector((state: AppState) => state.list.countries)
  console.log(contryList)
  const handleSearchChange = (searchTerm: string) => {
    setSearchTerm(searchTerm)
    const filterCountryListBySearchTerm: CountryType[] = contryList.filter(
      (c) => {
        console.log(c.name.toUpperCase())
        return c.name.toLowerCase().includes(searchTerm.toLowerCase())
      }
    )
    if (typingRefTimeoutSearch.current) {
      clearTimeout(typingRefTimeoutSearch.current)
    }
    typingRefTimeoutSearch.current = window.setTimeout(() => {
      setList(filterCountryListBySearchTerm)
    }, 100)
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={clsx(classes.TBar)}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Integrify
          </Typography>
          <Search handleSearchChangeProp={handleSearchChange} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {!loading ? (
          <Countries list={list} searchTerm={searchTerm} />
        ) : (
          <Loading />
        )}
      </main>
    </div>
  )
}

export default PersistentDrawerLeft
