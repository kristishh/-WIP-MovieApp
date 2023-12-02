import { MovieState, addMovieParams, fetchMoviesI, uploadImageI } from '../globals/interfaces'
import { ROOT, api } from '../reducers/utils'
import { movieActions } from '../reducers/movieSlice'
import useAppDispatch from './useAppDispatch'
import useAppSelector from './useAppSelector'
import { useState } from 'react'


const useMovie = () => {
  const { movies, current_page, total_count, field, order } = useAppSelector(state => state.movie)
  const dispatch = useAppDispatch()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(movies !== null)

  const fetchMovies = async (apiParams: fetchMoviesI) => {
    apiParams.url = '/movie'
    
    apiParams.params.order === undefined && delete apiParams.params.order
    apiParams.params.field === undefined && delete apiParams.params.field
    const response = await api(apiParams)
    const movies = await response.json()

    dispatch(movieActions.fetchAll(movies as unknown as MovieState))
  }

  const add = async (apiParams: addMovieParams) => {
    setIsLoading(true)
    apiParams.url = '/movie'

    try {
      const response = await api(apiParams)

      if (response.ok) {
        const newMovie = {
          ...apiParams.params.movie,
          poster: URL.createObjectURL(apiParams.params.attachments.poster as Blob)
        }
        dispatch(movieActions.addMovie(newMovie as never))

        return response
      } else {
        setError(error as string)
      }

      return response.json()
    } catch (error) {
      console.log('useMovie: add', error)
    } finally {
      setIsLoading(false)
    }


    return {
      isLoading,
      movies,
    }
  }

  const uploadImage = async (data: uploadImageI) => {
    const formData = new window.FormData()
    formData.append('attachments[poster]', data.attachments.poster as unknown as Blob)
    formData.append('attachments[title]', data.attachments.title)

    await fetch(`${ROOT}/movie/upload_poster`, {
      method: 'POST',
      body: formData
    })
  }

  return {
    isLoading,
    movies,
    order,
    field,
    current_page,
    total_count,
    fetchMovies,
    add,
    uploadImage
  }
}

export default useMovie
