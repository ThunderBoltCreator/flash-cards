import React from 'react'
import type { ReactNode } from 'react'

import { Header } from 'shared/ui/header/header' // Подставьте свой компонент
import type { Meta } from '@storybook/react'

import { Button } from 'shared/ui/button'

interface HeaderProps {
  rightSlot: ReactNode | null
  // Другие пропсы вашего компонента...
}

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'components/Header',
} satisfies Meta<typeof Header>

export default meta

const Template: React.FC<HeaderProps> = args => <Header {...args} />

export const WithRightSlot = Template.bind({})
// @ts-ignore
WithRightSlot.args = {
  rightSlot: <Button>Button</Button>,
}
export const WithoutRightSlot = Template.bind({})
// @ts-ignore
WithoutRightSlot.args = {
  rightSlot: null,
}
