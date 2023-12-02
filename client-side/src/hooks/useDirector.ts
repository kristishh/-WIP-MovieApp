import { useEffect, useState } from 'react'
import { ApiParams } from '../globals/interfaces'
import { directorAction } from '../reducers/directorSlice'
import useAppDispatch from './useAppDispatch'
import useAppSelector from './useAppSelector'

const useDirectorApi = (apiParams: ApiParams) =>{
  const dispatch = useAppDispatch()
  const data = useAppSelector(state => state.director)
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false) 
  apiParams.url = '/director'
  useEffect(() =>{
    if(!isDataLoaded){
      dispatch(directorAction(apiParams))
      setIsDataLoaded(true)
    }
  },[])

  return {
    isLoading: data.loading,
    ...data
  }
}

export default useDirectorApi
