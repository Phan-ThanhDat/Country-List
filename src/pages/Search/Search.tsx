import React, { ChangeEvent } from 'react'
import Card from '../../components/Card'
import { InputBase, IconButton } from '@material-ui/core'
import SearchIcon from '../../components/Icons/Search'
import { makeStyles } from '@material-ui/core/styles'

export interface ISearchProps {
  handleSearchChangeProp: (seachChangeTerm: any) => void
}

const useStyles = makeStyles((theme) => ({
  wrapperSearch: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginLeft: 'auto',
    color: 'white',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  searchIcon: {
    color: 'white',
  },
}))

const Search: React.FC<ISearchProps> = ({
  handleSearchChangeProp,
}: ISearchProps) => {
  const classes = useStyles()
  const [query, setQuery] = React.useState<string>('')

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearchChangeProp(query)
    }, 300)
    return () => {
      clearTimeout(timeout)
    }
  }, [handleSearchChangeProp, query])

  const handleSerchChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target && e.target
    console.log(value)
    setQuery(value)
    // handleSearchChangeProp(value)
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log(e)
    if (query !== '') {
      handleSearchChangeProp(query)
    }
  }

  return (
    <Card className={classes.wrapperSearch}>
      <InputBase
        className={classes.input}
        placeholder="Search Coutries"
        inputProps={{ 'aria-label': 'Search countries' }}
        onChange={handleSerchChange}
      />
      <IconButton
        className={classes.iconButton}
        aria-label="Search"
        onClick={onSubmit}
      >
        <SearchIcon />
      </IconButton>
    </Card>
  )
}

export default Search
