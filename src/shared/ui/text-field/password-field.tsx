import type { TextFieldProps } from './text-field'

import { useState } from 'react'
import type { InputHTMLAttributes } from 'react'

import CloseEye from 'shared/assets/icons/close-eye'
import Eye from 'shared/assets/icons/eye'

import { TextField, styles } from './text-field'

type PasswordFieldProps = TextFieldProps & {
  showPasswordInit?: boolean
}

export function PasswordField({ showPasswordInit, ...props }: PasswordFieldProps) {
  const [showPas, setShowPas] = useState(!!showPasswordInit)

  return (
    <TextField
      {...props}
      rightIcon={
        <button className={styles.rightIcon} onClick={() => setShowPas(!showPas)}>
          {showPas ? <Eye /> : <CloseEye />}
        </button>
      }
      type={getType('password', showPas)}
    />
  )
}

const getType = (
  type: Pick<InputHTMLAttributes<HTMLInputElement>, 'type'>['type'] = 'text',
  isShow: boolean
) => (type === 'password' && isShow ? 'text' : type)
