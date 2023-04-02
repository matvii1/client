import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

export const StyledContainer = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  [theme.breakpoints.between('xs', 'md')]: {
    padding: '0 1rem',
    margin: '0',
  },
  [theme.breakpoints.up('md')]: {
    width: '80%',
    maxWidth: 900,
  },
}))
