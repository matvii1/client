import { Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '~/App'
import { fetchOnePost } from '~/store/slices/post-slice'
import Container from '../Container/Container'
import FullPost from '../FullPost/FullPost'
import GoBack from '../GoBack/GoBack'
import { gridContainerStyles } from './StyledFullPostPage'

export default function FullPostPage() {
  const { postId } = useParams()
  const dispatch = useAppDispatch()
  const { currentPost, currentPostStatus } = useAppSelector(
    (state) => state.posts
  )

  const isCurrentPostLoading = currentPostStatus === 'loading'
  const isCurrentPostFailed = currentPostStatus === 'failed'

  useEffect(() => {
    if (postId) {
      dispatch(fetchOnePost(postId))
    }
  }, [])

  console.log(currentPost);
  
  return (
    <Container>
      <GoBack />

      <Grid container sx={gridContainerStyles}>
        <Grid item xs={12}>
          {!isCurrentPostFailed ? (
            <FullPost
            // isCurrentPostLoading={isCurrentPostLoading}
            // currentPost={currentPost}
             />
          ) : (
            <Typography>Failed to load</Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}
