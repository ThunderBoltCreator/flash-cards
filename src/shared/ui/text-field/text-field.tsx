import { useId } from 'react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { clsx } from 'clsx'
import { Typography } from 'shared/ui/typography'

import s from './text-field.module.scss'
export type TextFieldProps = {
  error?: string
  label?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
} & Omit<ComponentPropsWithoutRef<'input'>, 'id'>

export const styles = {
  input: clsx(s.input),
  inputWrapper: clsx(s.wrapper),
  leftIcon: clsx(s.icon, s.leftIcon),
  rightIcon: clsx(s.icon, s.rightIcon),
  root: clsx(s.root),
  title: clsx(s.title),
}

export function BaseField({
  className,
  error,
  label,
  leftIcon,
  rightIcon,
  ...props
}: TextFieldProps) {
  const myId = useId()

  return (
    <div className={clsx(styles.root, className)}>
      {label && (
        <Typography as={'label'} className={styles.title} htmlFor={myId} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={styles.inputWrapper}>
        <input className={styles.input} id={myId} {...props} />
        {leftIcon}
        {rightIcon}
        {error && <Typography variant={'error'}>{error}</Typography>}
      </div>
    </div>
  )
}
