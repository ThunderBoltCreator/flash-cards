import type { TextFieldProps } from './text-field'

import { useState } from 'react'

import CloseEye from 'shared/assets/icons/close-eye'
import Eye from 'shared/assets/icons/eye'

import { BaseField } from './text-field'

type PasswordFieldProps = Omit<TextFieldProps, 'rightIcon' | 'type'> & {
  showPasswordInit?: boolean
}

export function PasswordField({ disabled, showPasswordInit, ...props }: PasswordFieldProps) {
  const [showPas, setShowPas] = useState(!!showPasswordInit)
  const type = showPas ? 'text' : 'password'

  const toggleShowPas = () => {
    if (disabled) {
      return
    }

    setShowPas(!showPas)
  }

  return (
    <BaseField
      disabled={disabled}
      {...props}
      rightIcon={
        <button disabled={disabled} onClick={toggleShowPas}>
          {showPas ? <Eye /> : <CloseEye />}
        </button>
      }
      type={type}
    />
  )
}
