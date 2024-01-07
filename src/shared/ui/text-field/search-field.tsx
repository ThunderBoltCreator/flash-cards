import type { TextFieldProps } from './text-field'

import { useId, useState } from 'react'
import type { ChangeEvent } from 'react'

import Cross from 'shared/assets/icons/cross'
import Search from 'shared/assets/icons/search'

import { TextField, styles } from './text-field'
export type SearchFieldProps = TextFieldProps & {}

export function SearchField(props: SearchFieldProps) {
  const id = useId()
  const [value, setValue] = useState('')

  const onChangeField = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const SearchIcon = (
    <>
      {!value ? (
        <label className={styles.leftIcon} htmlFor={id}>
          <Search />
        </label>
      ) : (
        <button className={styles.leftIcon}>
          <Search />
        </button>
      )}
    </>
  )

  const ClearInputIcon = (
    <button className={styles.rightIcon} onClick={() => setValue('')}>
      <Cross />
    </button>
  )

  return (
    <TextField
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
