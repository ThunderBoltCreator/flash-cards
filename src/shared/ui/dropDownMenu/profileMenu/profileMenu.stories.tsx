import type { Meta, StoryObj } from '@storybook/react'

import { ProfileMenu } from 'shared/ui/dropDownMenu/profileMenu/profileMenu'

const meta = {
  argTypes: {
    email: {
      description: 'User email',
      name: 'email',
    },
    name: {
      description: 'User name',
      name: 'name',
    },
    userIcon: {
      description: 'User icon',
      name: 'Icon',
    },
  },

  component: ProfileMenu,

  tags: ['autodocs'],
  title: 'Components/DropdownMenu/ProfileMenu',
} satisfies Meta<typeof ProfileMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Menu: Story = {
  args: {
    email: 'j&johnson@gmail.com',
    name: 'Ivan',
  },
}
