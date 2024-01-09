import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from 'shared/ui/slider/slider'

const meta = {
  argTypes: {},
  args: {
    disabled: false,
  },
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
