import type { Meta, StoryObj } from '@storybook/react'

import Loup from 'shared/assets/icons/loup'
import { Button } from 'shared/ui/button/button'

const meta = {
  argTypes: {
    as: {
      control: { type: 'radio' },
      defaultValue: 'button',
      options: ['a', 'button'],
    },
    variant: {
      control: { type: 'radio' },
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'outlined', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    variant: 'secondary',
  },
}
export const Outlined: Story = {
  args: {
    children: 'Tertiary Button',
    disabled: false,
    variant: 'outlined',
  },
}
export const Link: Story = {
  args: {
    children: 'Tertiary Button',
    disabled: false,
    variant: 'link',
  },
}

export const FullWidth: Story = {
  args: {
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}

export const AsLink: Story = {
  args: {
    as: 'a',
    children: 'Link that looks like a button',
    variant: 'primary',
  },
}
export const Test: Story = {
  args: {
    children: 'Link that looks like a button',
    icon: <Loup />,
    iconPosition: 'right',
    variant: 'primary',
  },
}
