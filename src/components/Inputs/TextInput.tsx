import { TextField } from '@mui/material'
import { UseFormRegister } from 'react-hook-form'
import { IFormValues, RegisterName } from '~/types/Form'
import { getValidationFields } from '~/utils/getValidationFields'
import { inputStyles } from './StyledInput'

type Props = {
  registerName: RegisterName
  label: string
  register: UseFormRegister<IFormValues>
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
    />
  )
}
