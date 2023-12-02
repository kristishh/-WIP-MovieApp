import { configureStore } from '@reduxjs/toolkit'
import directorSlice from '../reducers/directorSlice'
import movieSlice from '../reducers/movieSlice'

export const store = configureStore({
  reducer: {
    movie: movieSlice,
    director: directorSlice
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
