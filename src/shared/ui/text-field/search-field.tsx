import type { TextFieldProps } from './text-field'

import { useId, useState } from 'react'
import type { ChangeEvent } from 'react'

import Cross from 'shared/assets/icons/cross'
import Loup from 'shared/assets/icons/loup'

import { BaseField } from './text-field'
export type SearchFieldProps = Omit<TextFieldProps, 'leftIcon' | 'rightIcon' | 'type'> & {}

export function SearchField(props: SearchFieldProps) {
  const id = useId()
  const [value, setValue] = useState('')

  const onChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const SearchIcon = (
    <>
      {!value ? (
        <label htmlFor={id}>
          <Loup />
        </label>
      ) : (
        <button>
          <Loup />
        </button>
      )}
    </>
  )

  const ClearInputIcon = (
    <button onClick={() => setValue('')}>
      <Cross />
    </button>
  )

  return (
    <BaseField
      id={id}
      leftIcon={SearchIcon}
      onChange={onChangeField}
      rightIcon={value && ClearInputIcon}
      type={'search'}
      value={value}
      {...props}
    />
  )
}
