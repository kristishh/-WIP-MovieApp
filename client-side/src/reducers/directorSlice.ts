import { ApiParams, ApiState } from '../globals/interfaces'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from './utils'

const initialState: ApiState = {
  loading: false,
  data: {},
}

export const directorAction = createAsyncThunk(
  'director',
  async (apiParams: ApiParams) =>{
    const response = await api(apiParams)

    return { ...response }
  }
)

const directorSlice = createSlice({
  name: 'director',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
    .addCase(directorAction.pending, (state: ApiState) => {
      state.loading = true
    })
    .addCase(directorAction.fulfilled, (state: ApiState, action: PayloadAction<object>) => {
      state.loading = false
      
      state.data = action.payload
    })
    .addCase(directorAction.rejected, (state: ApiState) => {
      state.loading = false
    })
  },
})

export default directorSlice.reducer
