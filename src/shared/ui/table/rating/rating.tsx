import { LightedStar } from 'shared/assets/icons/rating/lighted-star'
import { UnlightedStar } from 'shared/assets/icons/rating/unlighted-star'

import s from './rating.module.scss'

/**
 * @prop {Function} callBack - change rating (value - new rating)
 * @prop {number} value - set rating
 */
type Props = {
  callBack?: (value: number) => void
  className?: string
  value: number
} & React.HTMLProps<HTMLDivElement>

export const Rating = ({ callBack, className, value, ...defaultProps }: Props) => {
  const stars = []

  const onChangeRating = (value: number) => {
    callBack && callBack(value)
  }

  for (let i = 0; i < 5; i++) {
    if (value > i) {
      stars.push(<LightedStar key={i} />)
    } else {
      stars.push(<UnlightedStar key={i} />)
    }
  }

  return (
    <div className={`${s.root} ${className}`} {...defaultProps}>
      {stars.map((star, idx) => {
        return (
          <span key={idx} onClick={() => onChangeRating(idx + 1)}>
            {star}
          </span>
        )
      })}
    </div>
  )
}
