import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { FormHelperText, InputAdornment, TextField } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { getValidationFields } from '~/helpers/getValidationFields'
import { FormValues, RegisterName } from '~/types/Form'
import { eyeIconStyles, formHelperStyles, inputStyles } from './StyledInput'

type Props = {
  registerName: RegisterName
  label: string
  register: UseFormRegister<FormValues>
  error: boolean
  errorMessage: string
}

export default function PasswordInput({
  label,
  register,
  registerName,
  error,
  errorMessage,
}: Props) {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const inputType = showPassword ? 'text' : 'password'
  const validationField = getValidationFields(registerName)

  function handleShowPassword() {
    if (password.length) {
      setShowPassword((prev) => !prev)
    }
  }

  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  return (
    <>
      <TextField
        label={label}
        fullWidth
        error={error}
        autoComplete="false"
        type={inputType}
        required
        value={password}
        sx={inputStyles}
        helperText={errorMessage}
        {...register(registerName, validationField)}
        inputProps={{
          style: {
            padding: '0.7rem',
          },
        }}
        onChange={handleOnChange}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              onClick={handleShowPassword}
              sx={eyeIconStyles}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </InputAdornment>
          ),
        }}
      />
      {!errorMessage && (
        <FormHelperText sx={formHelperStyles}>
          At least 6 characters
        </FormHelperText>
      )}
    </>
  )
}
