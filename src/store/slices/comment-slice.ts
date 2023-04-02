import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '~/api/axios'
import { IComment } from '~/types/Comment'
import { Status } from '~/types/Status'

interface InitialState {
  lastCommentsStatus: Status
  lastComments: Array<IComment>
  postCommentsStatus: Status
  postComments: Array<IComment>
}

const initialState: InitialState = {
  lastCommentsStatus: 'loading',
  lastComments: [],
  postCommentsStatus: 'loading',
  postComments: [],
}

export const getLastComments = createAsyncThunk(
  'comments/fetchLast',
  async () => {
    try {
      const { data } = await axios.get('comments/last')

      return data
    } catch (error) {}
  }
)

export const getPostComments = createAsyncThunk(
  'comments/fetchPost',
  async (postId: string) => {
    try {
      const { data } = await axios.get(`comments/${postId}`)

      return data
    } catch (error) {}
  }
)

const CommentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getLastComments.pending, (state) => {
      state.lastCommentsStatus = 'loading'
      state.lastComments = []
    }),
      builder.addCase(getLastComments.fulfilled, (state, action) => {
        state.lastCommentsStatus = 'succeed'
        state.lastComments = action.payload
      }),
      builder.addCase(getLastComments.rejected, (state) => {
        state.lastCommentsStatus = 'failed'
        state.lastComments = []
      }),
      // get Post comments
      builder.addCase(getPostComments.pending, (state) => {
        state.postCommentsStatus = 'loading'
        state.postComments = []
      }),
      builder.addCase(getPostComments.fulfilled, (state, action) => {
        state.postCommentsStatus = 'succeed'
        state.postComments = action.payload
      }),
      builder.addCase(getPostComments.rejected, (state) => {
        state.postCommentsStatus = 'failed'
        state.postComments = []
      })
  },
})

export default CommentSlice.reducer
