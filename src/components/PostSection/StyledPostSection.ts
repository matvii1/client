import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const TabsWrapper = styled(Box)(({ theme }) => ({
  borderBottom: 1,
  borderColor: 'divider',
  marginBottom: '2rem',
}))

export const PostsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '1.75rem',
}))
