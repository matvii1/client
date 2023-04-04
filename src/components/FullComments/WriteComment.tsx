import { Avatar, Box, TextField } from '@mui/material'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import axios from '~/api/axios'
import { useAppDispatch, useAppSelector } from '~/App'
import { getPostComments } from '~/store/slices/comment-slice'
import { getAvatarPreview } from '~/utils/getAvatarPreview'
import { SingleCommentsWrap } from '../Comments/StyledComments'
import {
  SendButton,
  writeCommentAvatarStyles,
  WriteCommentBox,
} from './StyledFullComments'

export default function WriteComment() {
  const { userData } = useAppSelector((state) => state.auth.userData)!
  const [isLoading, setIsLoading] = useState(false)
  const { postId: id } = useParams()
  const [comment, setComment] = useState('')
  const dispatch = useAppDispatch()

  const avatar = getAvatarPreview(userData.name)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      setIsLoading(true)
      event.preventDefault()

      if (!!comment.length) {
        const field = {
          text: comment,
        }

        const { data } = await axios.post(`/comments/${id}`, field)

        if (data) {
          setComment('')
          setIsLoading(false)

          toast.success('Comment added')
          dispatch(getPostComments(id!.toString()))
        }
      }
    } catch (error) {
      toast.error('Could not post comment')
      setIsLoading(false)
      setComment('')
    } finally {
      setIsLoading(false)
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setComment(event.target.value)
  }

  return (
    <WriteCommentBox>
      <Toaster />
      <SingleCommentsWrap>
        <Avatar sx={writeCommentAvatarStyles}>{avatar}</Avatar>
        <Box sx={{ flexGrow: 1 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Write a comment..."
              multiline
              value={comment}
              onChange={handleChange}
            />
            <SendButton type="submit" variant="contained" loading={isLoading}>
              Send
            </SendButton>
          </form>
        </Box>
      </SingleCommentsWrap>
    </WriteCommentBox>
  )
}
