import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import LoadingButton from '@mui/lab/LoadingButton'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast, Toaster } from 'react-hot-toast'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from '~/api/axios'
import PasswordInput from '~/components/Inputs/PasswordInput'
import TextInput from '~/components/Inputs/TextInput'
import { useAppDispatch, useAppSelector } from '~/hooks/redux'
import { setAuth } from '~/store/slices/auth-slice'
import { IFormValues } from '~/types/Form'
import AuthContainer from '../AuthContainers/AuthContainer'
import AuthInnerContainer from '../AuthContainers/AuthInnerContainer'
import {
  FormTitle,
  FormWrapper,
  StyledFormControl,
} from '../RegisterPage/StyledRegister'
import { accountIconStyles, NoAccountMessage } from './StyledLogin'

export default function LoginPage() {
  const { isAuth } = useAppSelector((state) => state.auth)
  const [isLoginLoading, setIsLoginLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<IFormValues> = async (formData) => {
    setIsLoginLoading(true)
    try {
      const promise = axios.post('/auth/login', formData)
      const { data: res } = await promise

      if (res.token) {
        dispatch(setAuth(true))
        setIsLoginLoading(false)
        window.localStorage.setItem('token', res.token)
        navigate('/')
      }

      reset()
    } catch (error: any) {
      setIsLoginLoading(false)
      toast.error(error.response.data.message || 'Something went wrong')
    } finally {
      setIsLoginLoading(false)
    }
  }

  if (isAuth) {
    return <Navigate to="/posts" />
  }

  return (
    <AuthContainer>
      <Toaster />
      <AuthInnerContainer>
        <StyledFormControl>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FormTitle variant="h2">Log in</FormTitle>
            <Grid container justifyContent="center">
              <AccountCircleRoundedIcon color="action" sx={accountIconStyles} />
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

            <LoadingButton
              type="submit"
              variant="contained"
              fullWidth
              loading={isLoginLoading}
              sx={{ marginTop: 3 }}
            >
              Log in
            </LoadingButton>
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
