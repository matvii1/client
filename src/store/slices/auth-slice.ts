import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  isAuth: boolean
}

const initialState: InitialState = {
  isAuth: false,
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload
    },
  },
})

export const { setAuth } = AuthSlice.actions

export default AuthSlice.reducer
