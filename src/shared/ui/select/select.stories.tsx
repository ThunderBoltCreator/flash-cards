import type { Meta, StoryObj } from '@storybook/react'

import { Select } from 'shared/ui/select/select'

const meta = {
  argTypes: {
    disabled: {
      defaultValue: false,
      description: 'Disables the select if true',
      name: 'Disabled',
    },
    items: {
      defaultValue: [{ label: 'select 1', value: 'Select 1' }],
      description: 'Array of items to display in the select',
      name: 'Items',
    },
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Active: Story = {
  args: {
    disabled: false,
    items: [
      {
        label: 'select 1',
        value: 'Select 1',
      },
      {
        label: 'select 2',
        value: 'Select 2',
      },
      { label: 'select 3', value: 'Select 3' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    items: [
      { label: 'select 1', value: 'Select 1' },
      {
        label: 'select 2',
        value: 'Select 2',
      },
      { label: 'select 3', value: 'Select 3' },
    ],
  },
}
