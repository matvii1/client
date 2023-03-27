import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from '~/api/axios'
import PasswordInput from '~/components/Inputs/PasswordInput'
import TextInput from '~/components/Inputs/TextInput'
import { useAppDispatch, useAppSelector } from '~/store/hooks/redux'
import { setAuth } from '~/store/slices/auth-slice'
import { IFormValues } from '~/types/Form'
import AuthContainer from '../AuthContainers/AuthContainer'
import AuthInnerContainer from '../AuthContainers/AuthInnerContainer'
import {
  FormTitle,
  FormWrapper,
  StyledFormControl,
} from '../RegisterPage/StyledRegister'
import { NoAccountMessage } from './StyledLogin'

export default function LoginPage() {
  // TODO: add validation if login is not successful
  const [isSuccessLogin, setIsSuccessLogin] = useState<boolean | null>(null)
  const [isErrorLogin, setIsErrorLogin] = useState<boolean | null>(null)
  // TODO: add validation if login is not successful

  const { isAuth } = useAppSelector((state) => state.auth)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<IFormValues> = async (formData) => {
    try {
      const { data: res } = await axios.post('/auth/login', formData)

      if (res.token) {
        dispatch(setAuth(true))
        setIsSuccessLogin(true)
        window.localStorage.setItem('token', res.token)
        navigate('/')
      }

      reset()
    } catch (error) {
      setIsErrorLogin(true)
    } finally {
    }
  }

  console.log({ isAuth })

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <AuthContainer>
      <AuthInnerContainer>
        <StyledFormControl>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
              sx={{ marginTop: 3 }}
            >
              Log in
            </Button>
          </form>

          <NoAccountMessage>
            <Typography display="inline" fontSize="smallMessage">
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
