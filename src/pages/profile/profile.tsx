import { Card } from 'shared/ui/card/card'
import { Typography } from 'shared/ui/typography'

import s from './profile.module.scss'
type ProfileProps = {}

export function Profile({}: ProfileProps) {
  return (
    <Card className={s.root}>
      <Typography className={s.title} variant={'h1'}>
        Personal Information
      </Typography>
      <Avatar />
    </Card>
  )
}
