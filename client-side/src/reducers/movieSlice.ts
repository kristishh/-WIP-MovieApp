import { PayloadAction, createSlice, } from '@reduxjs/toolkit'
import { MovieState } from '../globals/interfaces'

const initialState: MovieState = {
  movies: null,
  current_page: 1,
  total_count: 0,
  field: null,
  order: null,
}

export const fetchAll = (state: MovieState, action: PayloadAction<MovieState>)=> {
  state.movies = action.payload.movies
  state.current_page = action.payload.current_page || 0
  state.total_count = action.payload.total_count || 0
  state.field = action.payload.field
  state.order = action.payload.order
}

export const addMovie = (state: MovieState, action: PayloadAction<MovieState>) => {
  if (state?.movies){
    state.movies.push([] as never)
  }
  state.movies?.push(action.payload as never)
}

const movieSlicer = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie,
    fetchAll,
  },
})

export default movieSlicer.reducer
export const movieActions = movieSlicer.actions
