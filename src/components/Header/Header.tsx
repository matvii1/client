import { Button, Grid, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import Container from '~/components/Container/Container'
import { isAuth } from '~/routes'
import { BoxButtons, Logo } from './StyledHeader'

export default function Header() {
  function handleLogOut() {}

  return (
    <Paper sx={{ borderRadius: 0 }}>
      <Container>
        <Grid
          minHeight={60}
          container
          justifyContent="space-between"
          alignItems="center">
          <Grid item>
            <Link to="/">
              <Logo>
                <img src="/logo.svg" width="80px" alt="logo" />
              </Logo>
            </Link>
          </Grid>
          <BoxButtons>
            <Grid item>
              {!isAuth ? (
                <Button variant="contained" size="small">
                  <Link to="/login">Log in</Link>
                </Button>
              ) : (
                <Button variant="contained" size="small">
                  <Link to="/make-post">Write post</Link>
                </Button>
              )}
            </Grid>
            <Grid item>
              {!isAuth ? (
                <Button variant="outlined" size="small">
                  <Link to="/register">Register</Link>
                </Button>
              ) : (
                <Button variant="outlined" size="small" onClick={handleLogOut}>
                  Log out
                </Button>
              )}
            </Grid>
          </BoxButtons>
        </Grid>
      </Container>
    </Paper>
  )
}
