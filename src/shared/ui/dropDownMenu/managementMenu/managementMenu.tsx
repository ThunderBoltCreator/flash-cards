import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Edit } from 'shared/assets/icons/edit'
import { Info } from 'shared/assets/icons/info'
import { Management } from 'shared/assets/icons/management'
import { Trash } from 'shared/assets/icons/trash'

import m from '../dropDown.module.scss'
import s from './managementMenu.module.scss'
export const ManagementMenu = () => {
  return (
    <div className={s.root}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button aria-label={'Customise options'} className={s.managementIcon}>
            <Management />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className={m.DropdownMenuContent} sideOffset={5}>
            <div className={m.items}>
              <DropdownMenu.Item className={`${m.menuItem}`}>
                <Info /> <p>Learn</p>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className={m.DropdownMenuSeparator} />

              <DropdownMenu.Item className={`${m.menuItem} ${s.editItem}`}>
                <Edit /> <p>Edit</p>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className={m.DropdownMenuSeparator} />

              <DropdownMenu.Item className={`${m.menuItem}`}>
                <Trash /> <p>Delete</p>
              </DropdownMenu.Item>
            </div>

            <DropdownMenu.Arrow className={m.DropdownMenuArrow} />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  )
}
