import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Profile } from 'shared/assets/icons/profile'
import { SignIn } from 'shared/assets/icons/sign-in'

import m from '../dropDown.module.scss'
import s from './profileMenu.module.scss'

type Props = {
  email?: string
  name?: string
  userIcon?: string
}

export const ProfileMenu = ({ email, name, userIcon }: Props) => {
  return (
    <div className={s.root}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <img
            aria-label={'Customise options'}
            className={s.iconUser}
            src={userIcon ? userIcon : `https://fakeimg.pl/36x36`}
          />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className={m.DropdownMenuContent} sideOffset={5}>
            <div className={s.info}>
              <img
                aria-label={'Customise options'}
                className={s.iconUser}
                src={'https://fakeimg.pl/36x36\n'}
              />
              <div className={s.userInfo}>
                <p className={s.name}>{name ? name : 'Anonymous'}</p>
                <p className={s.email}>{email ? email : 'anonymous@gmail.com'}</p>
              </div>
            </div>

            <div className={m.items}>
              <DropdownMenu.Separator className={m.DropdownMenuSeparator} />

              <DropdownMenu.Item className={`${m.menuItem} ${s.profile}`}>
                <Profile /> <p>My Profile</p>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className={m.DropdownMenuSeparator} />

              <DropdownMenu.Item className={m.menuItem}>
                <SignIn /> <p>Sign In</p>
              </DropdownMenu.Item>
            </div>

            <DropdownMenu.Arrow className={m.DropdownMenuArrow} />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
