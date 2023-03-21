import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'

export const RightBar = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1.5rem',
  [theme.breakpoints.up('xs')]: {
    marginTop: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    marginTop: '80px',
  },
}))

export const PostsContainer = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '2rem',
}))

export const RightBarBox = styled(Grid)(({ theme }) => ({
  display: 'flex',
  gap: '1rem',
  [theme.breakpoints.up('xs')]: {
    flexDirection: 'column',
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'column',
  },
}))
