import { Box, Grid, Paper, Typography } from '@mui/material'
import Container from '../Container/Container'

export default function Footer() {
  return (
    <Paper sx={{ height: 'auto', marginTop: '2rem' }}>
      <Container>
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            rowGap={2}>
            <Grid item>
              <img src="/logo.svg" width="80px" alt="" />
            </Grid>
            <Grid item order={-1} xs={12} sm="auto">
              <Typography color="textSecondary" variant="subtitle1">
                {`${new Date().getFullYear()} Vite | React | Material UI | React Router`}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Paper>
  )
}
