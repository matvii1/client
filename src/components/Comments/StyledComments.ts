import { Box, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

export const CommentsWrap = styled(Box)(() => ({
  marginTop: '1rem',
  display: 'flex',
  rowGap: '0.85rem',
  flexDirection: 'column',
}))

export const CommentsTitle = styled(Typography)(() => ({
  fontWeight: 500,
  fontSize: '1.2rem',
}))


export const SingleCommentsWrap = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '0.75rem',
}))

export const StyledCommentText = styled(Typography)(() => ({
  color: grey[700],
  fontSize: '0.85rem',
}))
