import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

export const TagTitle = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: '1.2rem',
  marginBottom: '0.45rem'
}))

export const TagsWrap = styled(Box)(() => ({
  marginTop: '1rem',
  display: 'flex',
  rowGap: '0.5rem',
  flexDirection: 'column',
}))

export const SingleTagWrap = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '0.75rem',
  borderRadius: '0.25rem',
  padding: '0.25rem 0.3rem',
  transition: 'background-color 0.1s ease',
  '&:hover': {
    backgroundColor: grey[100],
  },
}))

export const StyledTagText = styled(Typography)(() => ({
  color: grey[700],
}))
