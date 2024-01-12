import { Edit } from 'shared/assets/icons/edit'
import { Info } from 'shared/assets/icons/info'
import { Trash } from 'shared/assets/icons/trash'
import { Checkbox } from 'shared/ui/checkbox/checkbox'
import { Rating } from 'shared/ui/table/rating/rating'
import { TrendIndicator } from 'shared/ui/table/trendIndicator/trendIndicator'

import s from './table.module.scss'

export const Table = () => {
  return (
    <div className={s.table}>
      <p className={s.item}>Name</p>
      <p className={s.item}>Name</p>
      <div className={s.item}>
        <Checkbox />
        Name
      </div>
      <div className={s.item}>
        Name <Edit /> <Trash />{' '}
      </div>
      <div className={s.item}>
        <Info /> <Edit /> <Trash />
      </div>
      <Rating className={`${s.item} ${s.starItem}`} value={4} />
      <div className={s.item}>
        <img alt={'img'} src={'https://fakeimg.pl/120x48'} />
        Name
      </div>
      <Checkbox className={s.item} />

      <TrendIndicator className={s.trendItem} name={'Name'} />
    </div>
  )
}
