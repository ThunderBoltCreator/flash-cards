import type { Meta, StoryObj } from '@storybook/react'

import { TextFields } from './'

const meta = {
  args: {
    disabled: false,
  },
  component: TextFields.search,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextFields.search>

export default meta
type Story = StoryObj<typeof meta>

export const SearchField: Story = {
  args: {
    label: 'SearchField',
    placeholder: 'Placeholder',
  },
}
