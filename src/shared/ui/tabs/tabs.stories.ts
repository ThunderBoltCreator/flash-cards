import type { Meta, StoryObj } from '@storybook/react'

import { CardSwitcher } from 'widgets/card-switcher/ui/card-switcher'

const meta = {
  argTypes: {},
  component: CardSwitcher,
  tags: ['autodocs'],
  title: 'Components/CardSwitcher',
} satisfies Meta<typeof CardSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
