import type { ReactNode } from 'react'
import Logo from 'shared/layout/Logo.tsx'

type HeaderProps = {
  rightSlot?: ReactNode
}

export function Header({ rightSlot = null }: HeaderProps) {
  return (
    <header className={'py-3 px-32 bg-dark-700'}>
      <Logo />
      {rightSlot}
    </header>
  )
}
