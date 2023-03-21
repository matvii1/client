import { Box } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function AuthInnerContainer({ children }: Props) {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: { xs: '0 1rem', sm: 0 },
      }}>
      {children}
    </Box>
  )
}
