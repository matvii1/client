import { Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '~/App'
import { getPostComments } from '~/store/slices/comment-slice'
import { fetchOnePost } from '~/store/slices/post-slice'
import Container from '../../components/Container/Container'
import FullPost from '../../components/FullPost/FullPost'
import GoBack from '../../components/GoBack/GoBack'
import { gridContainerStyles } from './StyledFullPostPage'

export default function FullPostPage() {
  const { postId } = useParams()
  const dispatch = useAppDispatch()
  const { currentPostStatus } = useAppSelector((state) => state.posts)
  const isCurrentPostFailed = currentPostStatus === 'failed'

  useEffect(() => {
    if (postId) {
      dispatch(fetchOnePost(postId))
      dispatch(getPostComments(postId))
    }
  }, [])

  return (
    <Container>
      <GoBack />

      <Grid container sx={gridContainerStyles}>
        <Grid item xs={12} sx={{ minWidth: '100%' }}>
          {!isCurrentPostFailed ? (
            <FullPost />
          ) : (
            <Typography>Failed to load</Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}
