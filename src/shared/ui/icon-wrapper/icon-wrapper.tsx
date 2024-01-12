import { cloneElement } from 'react'
import type { ReactElement } from 'react'

type IconWrapperProps = {
  children: ReactElement
  className?: string
}
export const IconWrapper = ({ children, ...props }: IconWrapperProps) => {
  const component = cloneElement(children, { ...props })

  return <>{component}</>
}
