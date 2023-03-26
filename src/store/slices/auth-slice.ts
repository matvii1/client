import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  value: boolean
}

const initialState: InitialState = {
  value: false,
}

const AuthSlice = createSlice({
  name: 'isAuth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { setAuth } = AuthSlice.actions
export default AuthSlice.reducer
