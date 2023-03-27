import { Button, Grid, Paper } from '@mui/material'
import { Link, redirect } from 'react-router-dom'
import Container from '~/components/Container/Container'
import { useAppDispatch, useAppSelector } from '~/store/hooks/redux'
import { setAuth } from '~/store/slices/auth-slice'
import { RootState } from '~/store/store'
import { BoxButtons, Logo } from './StyledHeader'

export default function Header() {
  const { isAuth } = useAppSelector((state: RootState) => state.auth)
  const dispatch = useAppDispatch()

  function handleLogOut() {
    console.log(123)
    if (window.confirm('Are you sure you want to log out?')) {
      dispatch(setAuth(false))
      window.localStorage.removeItem('token')
      redirect('/')
    }

    return
  }

  return (
    <Paper sx={{ borderRadius: 0 }}>
      <Container>
        <Grid
          minHeight={60}
          container
          justifyContent="space-between"
          alignItems="center"
        >
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
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleLogOut()}
                >
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
