import type { Meta, StoryObj } from '@storybook/react'

import { TextFields } from './'

const meta = {
  args: {
    disabled: false,
  },
  component: TextFields.default,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextFields.default>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Default',
    placeholder: 'Placeholder',
  },
}
