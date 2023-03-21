import { Box } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function Main({ children }: Props) {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
      component='main'
      >
      {children}
    </Box>
  )
}
