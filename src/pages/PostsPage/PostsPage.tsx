import { Box, Grid } from '@mui/material'
import { useEffect } from 'react'
import Comments from '~/components/Comments/Comments'
import Container from '~/components/Container/Container'
import PageTags from '~/components/PageTags/PageTags'
import PostSection from '~/components/PostSection/PostSection'
import { useAppDispatch, useAppSelector } from '~/store/hooks/hook'
import { getTags } from '~/store/slices/tags-slice'
import { PostsContainer, RightBar, RightBarBox } from './StyledPostsPage'

export default function PostsPage() {
  const dispatch = useAppDispatch()
  const { tags, status } = useAppSelector((state) => state.tags)
  const areTagsLoading = status === 'loading'
  const areTagsFailedToLoad = status === 'failed'

  useEffect(() => {
    dispatch(getTags())
  }, [])

  return (
    <Box sx={{ mt: '2rem' }}>
      <Container>
        <Grid container columnSpacing={4}>
          <PostsContainer item xs={12} md={8}>
            <PostSection />
          </PostsContainer>
          <RightBar item xs={12} md={4}>
            <RightBarBox>
              <Grid item xs={12} sm={6} md={12}>
                <PageTags tags={tags} areTagsLoading={areTagsLoading} />
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <Comments />
              </Grid>
            </RightBarBox>
          </RightBar>
        </Grid>
      </Container>
    </Box>
  )
}
