import type { CSSProperties, ComponentPropsWithoutRef } from 'react'

import { clsx } from 'clsx'

import s from './avatar.module.scss'
type AvatarProps = {
  size?: CSSProperties['width']
} & ComponentPropsWithoutRef<'img'>

export function Avatar({ alt = 'Avatar', className, size = '36px', ...props }: AvatarProps) {
  return (
    <img
      alt={alt}
      className={clsx(className, s.root)}
      style={{ height: size, width: size }}
      {...props}
    />
  )
}
