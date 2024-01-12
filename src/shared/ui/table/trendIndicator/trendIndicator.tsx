import { useState } from 'react'

import { ChervonDown } from 'shared/assets/icons/chervon-down'
import { ChervonUp } from 'shared/assets/icons/chervon-up'

import s from './trendIndicator.module.scss'

type Props = {
  className?: string
  name: string
}

export const TrendIndicator = ({ className, name }: Props) => {
  const [arrowDirection, setArrowDirection] = useState<'down' | 'up'>('up')

  const onClickChangeDirection = () => {
    setArrowDirection(prevState => (prevState === 'down' ? 'up' : 'down'))
  }

  return (
    <div className={`${s.root} ${className}`} onClick={onClickChangeDirection}>
      <p>{name}</p>
      <span>{arrowDirection === 'up' ? <ChervonUp /> : <ChervonDown />}</span>
    </div>
  )
}
