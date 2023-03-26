import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IPost } from '~/types/Post'
import { ISinglePost } from '~/types/SinglePost'
import { Status } from '~/types/Status'
import axios from '../../api/axios'

interface InitialValue {
  posts: IPost[]
  status: Status
  currentPost: ISinglePost | null
  currentPostStatus: Status
}

const initialState: InitialValue = {
  posts: [],
  status: 'loading',
  currentPost: null,
  currentPostStatus: 'loading'
}

export const fetchPosts = createAsyncThunk<IPost[]>(
  'posts/fetchPosts',
  async () => {
    const { data } = await axios.get('/posts')

    return data
  }
)

export const fetchOnePost = createAsyncThunk(
  'posts/fetchOnePost',
  async (postId: string) => {
    const { data } = await axios.get(`/posts/${postId}`)

    return data
  }
)

export const PostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts = []
      state.status = 'loading'
    }),
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload
        state.status = 'succeed'
      }),
      builder.addCase(fetchPosts.rejected, (state) => {
        state.posts = []
        state.status = 'failed'
      }),
      // fetching one post
      builder.addCase(fetchOnePost.pending, (state) => {
        state.currentPost = null
        state.status = 'loading'
      }),
      builder.addCase(fetchOnePost.fulfilled, (state, action) => {
        state.currentPost = action.payload
        state.currentPostStatus = 'succeed'
      }),
      builder.addCase(fetchOnePost.rejected, (state) => {
        state.currentPost = null
        state.currentPostStatus = 'failed'
      })
  },
})

export default PostSlice.reducer
