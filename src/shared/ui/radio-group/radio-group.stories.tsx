import type {Meta, StoryObj} from '@storybook/react'
import {RadioGroup} from "./";


const meta = {
    component: RadioGroup,
    tags: ['autodocs'],
    title: 'Components/Radio Group',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'primary',
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
        variant: 'primary',
    },
}

