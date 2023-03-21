import { Grid } from '@mui/material'
import Container from '../Container/Container'
import FullPost from '../FullPost/FullPost'
import GoBack from '../GoBack/GoBack'

export default function FullPostPage() {
  return (
    <Container>
      <GoBack />

      <Grid container sx={{ marginTop: '34px' }}>
        <Grid item xs={12}>
          <FullPost />
        </Grid>
      </Grid>
    </Container>
  )
}
