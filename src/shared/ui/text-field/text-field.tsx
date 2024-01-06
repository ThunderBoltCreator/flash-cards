import { useId } from 'react'
import type { ComponentPropsWithRef, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './text-field.module.scss'
export type TextFieldProps = {
  error?: ReactNode
  id?: string
  label?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
} & ComponentPropsWithRef<'input'>

export const styles = {
  input: clsx(s.input),
  inputWrapper: clsx(s.wrapper),
  leftIcon: clsx(s.icon, s.leftIcon),
  rightIcon: clsx(s.icon, s.rightIcon),
  root: clsx(s.root),
  title: clsx(s.title),
}

export function TextField({
  className,
  error,
  id,
  label,
  leftIcon,
  rightIcon,
  ...props
}: TextFieldProps) {
  const myId = useId()

  return (
    <div className={clsx(styles.root, className)}>
      {label && (
        <label className={styles.title} htmlFor={id ?? myId}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input className={styles.input} id={id ?? myId} {...props} />
        {leftIcon}
        {rightIcon}
        {error}
      </div>
    </div>
  )
}
