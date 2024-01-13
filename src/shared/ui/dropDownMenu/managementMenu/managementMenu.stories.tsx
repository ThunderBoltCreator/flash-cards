import type { Meta, StoryObj } from '@storybook/react'

import { ManagementMenu } from 'shared/ui/dropDownMenu/managementMenu/managementMenu'

const meta = {
  argTypes: {},

  component: ManagementMenu,

  tags: ['autodocs'],
  title: 'Components/DropdownMenu/ManagementMenu',
} satisfies Meta<typeof ManagementMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Menu: Story = {
  args: {},
}
