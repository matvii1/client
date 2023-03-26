import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '~/api/axios'
import { ITag } from '~/types/Tag'

interface InitialValue {
  tags: ITag[]
  status: 'loading' | 'succeed' | 'failed'
}

const initialState: InitialValue = {
  tags: [],
  status: 'loading',
}

export const getTags = createAsyncThunk<ITag[]>('tags/fetchTags', async () => {
  const { data } = await axios.get('/posts/tags')

  return data
})

export const TagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTags.pending, (state) => {
      state.status = 'loading'
    }),
      builder.addCase(getTags.fulfilled, (state, action) => {
        state.status = 'succeed'
        state.tags = action.payload
      }),
      builder.addCase(getTags.rejected, (state) => {
        state.tags = []
        state.status = 'failed'
      })
  },
})

export default TagsSlice.reducer
