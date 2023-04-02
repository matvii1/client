import { createSlice } from '@reduxjs/toolkit'
import { User } from '~/types/User'

interface UserData {
  userData: User
}

interface InitialState {
  isAuth: boolean
  userData: UserData | null
}

const initialState: InitialState = {
  isAuth: false,
  userData: null,
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload
    },
    setUserData: (state, action) => {
      state.userData = action.payload
    }
  },
})

export const { setAuth, setUserData } = AuthSlice.actions

export default AuthSlice.reducer
