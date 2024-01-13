import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from 'shared/ui/slider/slider'

// @ts-ignore
const SliderStory = props => {
  const [value, setValue] = useState<number[]>([10, 25])

  return <Slider onValueChange={setValue} value={value} {...props} />
}

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
  args: {
    max: 100,
    min: 0,
    style: { maxWidth: '300px' },
  },
  render: args => <SliderStory {...args} />,
}
export const DisabledSlider: Story = {
  args: {
    disabled: true,
    max: 100,
    min: 0,
    style: { maxWidth: '300px' },
  },
  render: args => <SliderStory {...args} />,
}
