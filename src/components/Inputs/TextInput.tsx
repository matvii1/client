import { TextField } from '@mui/material'
import { UseFormRegister } from 'react-hook-form'
import { getValidationFields } from '~/helpers/getValidationFields'
import { FormValues, RegisterName } from '~/types/Form'
import { inputStyles } from './StyledInput'

type Props = {
  registerName: RegisterName
  label: string
  register: UseFormRegister<FormValues>
  error: boolean
  errorMessage: string
}

export default function TextInput({
  label,
  register,
  registerName,
  error,
  errorMessage,
}: Props) {
  const validationField = getValidationFields(registerName)
  const isEmail = registerName === 'email'
  const inputType = isEmail ? 'email' : 'text'

  return (
    <TextField
      label={label}
      fullWidth
      error={error}
      type={inputType}
      required
      sx={inputStyles}
      helperText={errorMessage}
      {...register(registerName, validationField)}
      inputProps={{
        style: {
          padding: '0.7rem',
        },
      }}
    />
  )
}
