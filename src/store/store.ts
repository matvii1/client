import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/auth-slice'
import PostReducer from './slices/post-slice'
import TagsReducer from './slices/tags-slice'

export const store = configureStore({
  reducer: {
    posts: PostReducer,
    auth: AuthReducer,
    tags: TagsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
