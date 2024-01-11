import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './'

const meta = {
  argTypes: {},
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/Radio Group',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { label: 'Very bad', value: 'very bad' },
      { label: 'Bad', value: 'bad' },
      { label: 'Not so bad', value: 'not so bad' },
      { label: 'Good', value: 'good' },
      { label: 'Perfect', value: 'perfect' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    options: [
      { label: 'Very bad', value: 'very bad' },
      { label: 'Bad', value: 'bad' },
      { label: 'Not so bad', value: 'not so bad' },
      { label: 'Good', value: 'good' },
      { label: 'Perfect', value: 'perfect' },
    ],
  },
}
