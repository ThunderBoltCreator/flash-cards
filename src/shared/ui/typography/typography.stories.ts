import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from 'shared/ui/typography/typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'body1',
        'body2',
        'caption',
        'h1',
        'h2',
        'h3',
        'large',
        'link1',
        'link2',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Body_1: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    disabled: false,
    variant: 'body1',
  },
}

export const Body_2: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    disabled: false,
    variant: 'body2',
  },
}
export const Caption: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    disabled: false,
    variant: 'caption',
  },
}
export const H_1: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    disabled: false,
    variant: 'h1',
  },
}

export const H_2: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    disabled: false,
    variant: 'h2',
  },
}

export const H_3: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'h3',
  },
}

export const Large: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'large',
  },
}

export const Link_1: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'link1',
  },
}

export const Link_2: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'link2',
  },
}

export const Overline: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'overline',
  },
}

export const Subtitle_1: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'subtitle1',
  },
}

export const Subtitle_2: Story = {
  args: {
    children: 'Carosserie Test Zürich\n' + 'Stauffacherstrasse 31\n' + '8004 Zürich, ZH, CH',
    variant: 'subtitle2',
  },
}
