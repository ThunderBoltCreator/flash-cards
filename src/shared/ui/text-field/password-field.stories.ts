import type { Meta, StoryObj } from '@storybook/react'

import { TextFields } from './'

const meta = {
  args: {
    disabled: false,
  },
  component: TextFields.password,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextFields.password>

export default meta
type Story = StoryObj<typeof meta>

export const PasswordField: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
  },
}
