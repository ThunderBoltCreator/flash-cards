import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'link' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
  as,
  children,
  className,
  fullWidth,
  variant = 'primary',
  ...rest
}: ButtonProps<T>) => {
  const Component: ElementType = as || 'button'
  const styles = clsx(
    s.button,
    s[variant],
    fullWidth ? s.fullWidth : null,
    className ? className : null
  )

  return (
    <Component className={styles} {...rest}>
      {children}
    </Component>
  )
}
