import { Box } from '@mui/material'
import { ReactNode } from 'react'
type Props = {
  children: ReactNode
}

export default function AuthContainer({ children }: Props) {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
      }}>
      {children}
    </Box>
  )
}
