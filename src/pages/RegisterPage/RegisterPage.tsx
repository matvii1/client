import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import PasswordInput from '~/components/Inputs/PasswordInput'
import TextInput from '~/components/Inputs/TextInput'
import { IFormValues } from '~/types/Form'
import AuthContainer from '../AuthContainers/AuthContainer'
import AuthInnerContainer from '../AuthContainers/AuthInnerContainer'
import {
  FormTitle,
  FormWrapper,
  HaveAccountMessage,
  StyledFormControl,
} from './StyledRegister'

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data)

    if (!Object.keys(errors).length) {
      reset()
    }
  }

  return (
    <AuthContainer>
      <AuthInnerContainer>
        <StyledFormControl>
          <form action="" onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormTitle variant="h2">Register</FormTitle>
            <Grid container justifyContent="center">
              <AccountCircleRoundedIcon
                color="action"
                sx={{
                  marginTop: 4,
                  transform: 'scale(2.5)',
                }}
              />
            </Grid>

            <FormWrapper>
              <Box>
                <TextInput
                  label="First name"
                  register={register}
                  registerName="firstName"
                  error={!!errors.firstName}
                  errorMessage={errors.firstName?.message || ''}
                />
              </Box>
              <Box>
                <TextInput
                  label="Last name"
                  register={register}
                  registerName="lastName"
                  error={!!errors.lastName}
                  errorMessage={errors.lastName?.message || ''}
                />
              </Box>
              <Box>
                <TextInput
                  label="Email"
                  register={register}
                  registerName="email"
                  error={!!errors.email}
                  errorMessage={errors.email?.message || ''}
                />
              </Box>
              <Box position="relative">
                <PasswordInput
                  label="Password"
                  register={register}
                  registerName="password"
                  error={!!errors.password}
                  errorMessage={errors.password?.message || ''}
                />
              </Box>
            </FormWrapper>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: 3 }}>
              Register
            </Button>
            <HaveAccountMessage>
              <Typography display="inline" fontSize="smallMessage">
                Already have an account?{' '}
              </Typography>
              <Link to="/login" className="sign-in-link">
                Sign in
              </Link>
            </HaveAccountMessage>
          </form>
        </StyledFormControl>
      </AuthInnerContainer>
    </AuthContainer>
  )
}
