import { RegisterName } from '~/types/Form'

export function getValidationFields(name: RegisterName) {
  switch (name) {
    case 'password':
      return {
        required: 'Password is required',
        minLength: {
          value: 6,
          message: 'Password is too short',
        },
        maxLength: {
          value: 30,
          message: 'Too long',
        },
      }

    case 'firstName':
      return {
        required: 'First name is required',
        maxLength: {
          value: 30,
          message: 'Too long',
        },
        pattern: {
          value: /^[a-zA-Z]*$/,
          message: 'First name can not contain numbers',
        },
      }

      case 'email': {
        return {
          required: 'Email is required',
          maxLength: {
            value: 30,
            message: 'Too long',
          },
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Enter valid email',
          },
        }
      }

    case 'lastName':
      return {
        required: 'Last name is required',
        maxLength: {
          value: 30,
          message: 'Too long',
        },
        pattern: {
          value: /^[a-zA-Z]*$/,
          message: 'Last name can not contain numbers',
        },
      }

    default:
      break
  }
}
