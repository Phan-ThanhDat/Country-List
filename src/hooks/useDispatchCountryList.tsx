import { useEffect, useState } from 'react'
import { getCountriesRequest } from '../redux/actions'
import { useDispatch } from 'react-redux'

const useDispatchCountryLis = (uri: string = '/all') => {
  const [loading, setLoading] = useState(true)

  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      getCountriesRequest(
        {
          uri,
        },
        () => {
          setLoading(false)
        },
        () => setLoading(false)
      )
    )
  }, [dispatch, uri])
  return [loading, dispatch]
}

export default useDispatchCountryLis
