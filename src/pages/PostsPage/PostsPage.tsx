import { Box, Grid } from '@mui/material'
import Comments from '~/components/Comments/Comments'
import Container from '~/components/Container/Container'
import PostSection from '~/components/PostSection/PostSection'
import Tags from '~/components/Tags/Tags'
import { PostsContainer, RightBar, RightBarBox } from './StyledPostsPage'

export default function PostsPage() {
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
                <Tags />
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
