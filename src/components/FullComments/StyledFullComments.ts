import { Box, Button, Card } from '@mui/material'
import { styled } from '@mui/material/styles'

export const FullCommentCard = styled(Card)(() => ({
  marginTop: '1rem',
}))

export const WriteCommentBox = styled(Box)(() => ({
  marginTop: '1.2rem',
}))

export const SendButton = styled(Button)(() => ({
  marginTop: '0.75rem',
  textTransform: 'none',
}))
