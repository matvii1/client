import { FormControl, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'

export const StyledFormControl = styled(FormControl)({
  width: '100%',
  maxWidth: '350px',
  marginBlock: '4rem',
  padding: '2rem',
  borderRadius: '0.5rem',
  backgroundColor: 'white',
})

export const FormWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.8rem',
  marginTop: '2.5rem',
  borderRadius: '0.5rem',
})

export const FormTitle = styled(Typography)(() => ({
  textAlign: 'center',
  fontWeight: 600,
}))

export const HaveAccountMessage = styled(Box)(({ theme }) => ({
  ...theme.typography.smallMessage,
  marginTop: '0.85rem',
  textAlign: 'center',
}))
