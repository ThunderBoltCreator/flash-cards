import { useId } from 'react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import { clsx } from 'clsx'
import { IconWrapper } from 'shared/ui/icon-wrapper'
import { Typography } from 'shared/ui/typography'

import s from './text-field.module.scss'
export type TextFieldProps = {
  error?: string
  label?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
} & ComponentPropsWithoutRef<'input'>

export function BaseField({
  className,
  disabled,
  error,
  id,
  label,
  leftIcon,
  rightIcon,
  ...props
}: TextFieldProps) {
  const myId = useId()

  const styles = {
    input: clsx(s.input),
    inputWrapper: clsx(s.wrapper),
    leftIcon: clsx(s.icon, s.leftIcon),
    rightIcon: clsx(s.icon, s.rightIcon),
    root: clsx(s.root),
    title: clsx(s.title),
  }

  return (
    <div className={clsx(styles.root, className)}>
      {label && (
        <Typography as={'label'} className={styles.title} htmlFor={id || myId} variant={'body2'}>
          {label}
        </Typography>
      )}
      <div className={styles.inputWrapper}>
        <input className={styles.input} disabled={disabled} id={id || myId} {...props} />
        {leftIcon && <IconWrapper className={styles.leftIcon}>{leftIcon}</IconWrapper>}
        {rightIcon && <IconWrapper className={styles.rightIcon}>{rightIcon}</IconWrapper>}
        {error && <Typography variant={'error'}>{error}</Typography>}
      </div>
    </div>
  )
}
