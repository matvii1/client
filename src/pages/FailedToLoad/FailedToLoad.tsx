import { Typography } from '@mui/material'
import { StyledErrorContainer } from '~/App/StyledApp'

export default function FailedToLoad() {
  return (
    <StyledErrorContainer>
      <Typography variant="h2">Failed to load :(</Typography>
    </StyledErrorContainer>
  )
}
