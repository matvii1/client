import { Box, Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import Comments from '~/components/Comments/Comments'
import Container from '~/components/Container/Container'
import PageTags from '~/components/PageTags/PageTags'
import PostSection from '~/components/PostSection/PostSection'
import { useAppDispatch, useAppSelector } from '~/store/hooks/redux'
import { getLastComments } from '~/store/slices/comment-slice'
import { fetchNewPosts } from '~/store/slices/post-slice'
import { getTags } from '~/store/slices/tags-slice'
import { filterTags } from '~/utils/filterTags'
import { PostsContainer, RightBar, RightBarBox } from './StyledPostsPage'

export default function PostsPage() {
  const dispatch = useAppDispatch()
  const { tags, status } = useAppSelector((state) => state.tags)
  const areTagsLoading = status === 'loading'
  const areTagsFailedToLoad = status === 'failed'
  const { posts, status: postStatus } = useAppSelector((state) => state.posts)
  const { lastComments, lastCommentsStatus } = useAppSelector(
    (state) => state.comments
  )
  const areLastCommentsFailed = lastCommentsStatus === 'failed'

  const filteredTags = filterTags(tags)

  useEffect(() => {
    dispatch(getTags())
    dispatch(getLastComments())
    dispatch(fetchNewPosts())
  }, [])

  return (
    <Box sx={{ mt: '2rem' }}>
      <Container>
        {postStatus !== 'loading' && !posts?.length ? (
          <Typography variant="h1">No posts yet</Typography>
        ) : (
          <Grid container columnSpacing={4}>
            <PostsContainer item xs={12} md={8}>
              <PostSection />
            </PostsContainer>
            <RightBar item xs={12} md={4}>
              <RightBarBox>
                <Grid item xs={12} sm={6} md={12}>
                  <PageTags
                    tags={filteredTags}
                    areTagsLoading={areTagsLoading}
                    areTagsFailedToLoad={areTagsFailedToLoad}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={12}>
                  {!areLastCommentsFailed ? (
                    <Comments
                      isLoading={lastCommentsStatus === 'loading'}
                      comments={lastComments}
                    />
                  ) : (
                    <Typography variant="h4">
                      Comments are failed to load
                    </Typography>
                  )}
                </Grid>
              </RightBarBox>
            </RightBar>
          </Grid>
        )}
      </Container>
    </Box>
  )
}
