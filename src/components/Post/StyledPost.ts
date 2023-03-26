import { Box, Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
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
}))

export const IconsBox = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
}))

export const iconsStyles = {
  display: 'flex',
  gap: '0.5rem',
  backgroundColor: grey[100],
  borderRadius: '0.34rem',
  alignItems: 'center',
  color: grey[900],
  position: 'absolute',
  top: '0.85rem',
  right: '0.85rem',
  fontSize: '2.2rem',
  padding: '0.5rem',
  cursor: 'pointer',
  transition: 'opacity 0.1s ease',
}

export const CardContentInner = styled(Box)(({ theme }) => ({
  paddingLeft: '2rem',
  maxWidth: '90%',
}))

export const ChatBox = styled(Box)(({ theme }) => ({}))
