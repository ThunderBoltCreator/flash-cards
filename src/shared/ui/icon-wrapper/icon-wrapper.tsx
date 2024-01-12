import { cloneElement } from 'react'
import type { ReactElement, ReactNode } from 'react'

type IconWrapperProps = {
  children: ReactNode
  className?: string
}
export const IconWrapper = ({ children, ...props }: IconWrapperProps) => {
  const component = cloneElement(children as ReactElement, { ...props })

  return <>{component}</>
}
