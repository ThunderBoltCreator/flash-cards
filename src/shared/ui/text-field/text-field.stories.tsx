import type { Meta, StoryObj } from '@storybook/react'

import { TextFields } from './'

const meta = {
  argTypes: {},
  args: {
    disabled: false,
  },
  component: TextFields.BaseField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextFields.BaseField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {},
  args: {
    errorMessage: 'Error!',
    label: 'Default',
    placeholder: 'Placeholder',
  },
}

// todo add ARGS
export const PasswordField: Story = {
  args: {
    label: 'Password',
    placeholder: 'Placeholder',
  },
  render: args => {
    return <TextFields.Password {...args} />
  },
}
export const SearchField: Story = {
  args: {
    label: 'Search',
    placeholder: 'Placeholder',
  },
  render: args => {
    return <TextFields.Search {...args} />
  },
}
