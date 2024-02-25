import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

export const Body = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100dvh',
  backgroundColor: '#F3F2F3',
})

export const StyledErrorContainer = styled(Box)(({ theme }) => ({
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  [theme.breakpoints.between('xs', 'md')]: {
    padding: '0 1rem',
  },

  [theme.breakpoints.up('md')]: {
    width: '80%',
    maxWidth: 900,
  },
}))
