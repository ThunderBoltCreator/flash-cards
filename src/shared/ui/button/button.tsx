import type { ComponentPropsWithoutRef, ElementType } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType> = {
  as?: T
  fullWidth?: boolean
  variant?: 'link' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
  as,
  children,
  className,
  disabled,
  fullWidth,
  variant = 'primary',
  ...rest
}: ButtonProps<T>) => {
  const Component: ElementType = as || 'button'
  const styles = clsx(
    s.button,
    s[variant],
    fullWidth ? s.fullWidth : null,
    className ? className : null,
    disabled ? s.disabled : null
  )

  return (
    <Component className={styles} disabled={disabled} {...rest}>
      {children}
    </Component>
  )
}
