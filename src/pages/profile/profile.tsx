import type { UserData } from 'pages/profile/types'

import LogoutIcon from 'shared/assets/icons/log-out'
import { Avatar } from 'shared/ui/avatar'
import { Button } from 'shared/ui/button'
import { Card } from 'shared/ui/card/card'
import { Typography } from 'shared/ui/typography'

import s from './profile.module.scss'
type ProfileProps = {}

export function Profile({}: ProfileProps) {
  const data: Omit<UserData, 'created' | 'updated'> = {
    avatar: '',
    email: 'ahahah@haha.hah',
    id: crypto.randomUUID(),
    isEmailVerified: true,
    name: 'Ivan',
  }

  return (
    <Card className={s.root}>
      <Typography className={s.title} variant={'large'}>
        Personal Information
      </Typography>
      <Avatar
        size={96}
        src={
          data.avatar ||
          'https://s3-alpha-sig.figma.com/img/9846/73b3/30142bfde5bdcdb7549cf75f7a51d100?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hRwTCI4saUNHfZDp1kwf9KzQ7DtFNPOZ0Be5PH5Tp-syPPq6D1wdWn-lB0b5rUM-BifBL5bmEhNXBmVn4O7FuAGbFyT32SieCHiB9254vsS4QqBRVV0Xsy8NaFdBtNz5qRVOZVubd3lydRodfDwPpbLTP2OPPwDgfsT4TYcZJ~UX8DUnfUr8zvcWb5eDhC~q~8tNvvdUYarA-VCu2VbgKr2meS2lm3j5TKxXONUejpu730Q8j-kH-Xs2qgUcglv3uKUVArmMF3xgdip0AwfyeEDLE4u4N9dReUAegdZ~1J9s-M10FDTa7HuGhn6QofMBfsuHIJENMKOxxFKsmt-AqA__'
        }
      />
      <div className={s.personalInfo}>
        <div>
          <Typography as={'span'} variant={'h1'}>
            {data.name}
          </Typography>
        </div>
        <Typography as={'span'} variant={'body2'}>
          {data.email}
        </Typography>
      </div>
      <Button icon={<LogoutIcon />} variant={'secondary'}>
        <Typography variant={'subtitle2'}>Logout</Typography>
      </Button>
    </Card>
  )
}
