import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './checkbox'

const meta = {
  argTypes: {
    checked: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
  args: {
    checked: false,
    disabled: false,
  },
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: "Hello I'm label",
  },
  render: args => <Checkbox {...args} />,
}
export const Disabled: Story = {
  args: {
    checked: false,
    disabled: true,
    label: "Hello I'm label",
  },
  render: args => <Checkbox {...args} />,
}
