import type { Meta, StoryObj } from '@storybook/react'

import { Profile } from 'pages/profile/profile'

const meta = {
  component: Profile,
  tags: ['autodocs'],
  title: 'Pages/Profile',
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
