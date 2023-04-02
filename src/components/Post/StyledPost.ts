import { Box, Grid, Typography } from '@mui/material'
import { blue, blueGrey, grey, red } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

export const TagsBox = styled(Box)(({ theme }) => ({
  marginTop: '0.5rem',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '0 1rem',
}))

export const Tag = styled(Typography)(({ theme }) => ({
  ...theme.typography.smallMessage,
  color: grey[600],
  margin: 0,
  padding: '0.1rem 0.2rem',
  borderRadius: '0.1rem',
  transition: 'color 0.1s ease',
  '&:hover': {
    color: grey[900],
  },
  cursor: 'pointer',
}))

export const IconsBox = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
}))

export const CardContentInner = styled(Box)(({ theme }) => ({
  paddingLeft: '2rem',
  maxWidth: '90%',
}))

export const ChatBox = styled(Box)(({ theme }) => ({}))

export const closeIconStyles = { fontSize: '1.6rem', color: red[500] }
export const editIconStyles = { color: blue[900] }
export const cardHeaderAvatarStyles = {
  fontSize: '0.8rem',
  width: '40px',
  height: '40px',
  backgroundColor: blueGrey[500],
}
export const bottomIconStyles = { fontSize: '1rem' }
