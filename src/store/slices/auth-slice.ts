import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '~/api/axios'
import { Status } from '~/types/Status'

interface Options {
  email: string
  password: string
}

export const fetchAuth = createAsyncThunk(
  'fetch/auth',
  async (options: Options) => {
    try {
      const { data } = await axios.post('/auth/login', options)

      return data
    } catch (error: any) {
      console.log(error.response.data)
    }
  }
)

interface InitialState {
  value: boolean
  data: string | null
  status: Status
}

const initialState: InitialState = {
  value: false,
  data: null,
  status: 'loading',
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuth.pending, (state) => {
      state.status = 'loading'
    }),
      builder.addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = 'succeed'
        state.data = action.payload
      }),
      builder.addCase(fetchAuth.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export default AuthSlice.reducer
