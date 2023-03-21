import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import PasswordInput from '~/components/Inputs/PasswordInput'
import TextInput from '~/components/Inputs/TextInput'
import { FormValues } from '~/types/Form'
import AuthContainer from '../AuthContainers/AuthContainer'
import AuthInnerContainer from '../AuthContainers/AuthInnerContainer'
import {
  FormTitle,
  FormWrapper,
  HaveAccountMessage,
  StyledFormControl,
} from '../RegisterPage/StyledRegister'
import { NoAccountMessage } from './StyledLogin'

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
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
            <FormTitle variant="h2">Log in</FormTitle>
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
              Log in
            </Button>
          </form>

          <NoAccountMessage>
            <Typography display="inline" fontSize='smallMessage'>
              Don`t have an account yet?{' '}
            </Typography>
            <Link to="/register" className="sign-in-link">
              Create account
            </Link>
          </NoAccountMessage>
        </StyledFormControl>
      </AuthInnerContainer>
    </AuthContainer>
  )
}
