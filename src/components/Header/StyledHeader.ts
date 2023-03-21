import { Grid, Typography } from '@mui/material'
import { pink, red } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

export const BoxButtons = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
}))

export const Logo = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  borderRadius: 2,
  alignItems: 'center',
  color: 'white',
  height: '100%',
  padding: '.4rem 1rem',
  fontWeight: '800',
  fontSize: '0.9em',
}))
