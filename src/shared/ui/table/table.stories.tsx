import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { action } from '@storybook/addon-actions'
import { Edit } from 'shared/assets/icons/edit'
import { Info } from 'shared/assets/icons/info'
import { Trash } from 'shared/assets/icons/trash'
import { Rating } from 'shared/ui/table/rating/rating'
import { TrendIndicator } from 'shared/ui/table/trendIndicator/trendIndicator'

import { Table } from './table'

const meta = {
  argTypes: {},
  component: Table,
  parameters: {
    docs: {
      description: {
        component: 'Table with different elements',
      },
    },
  },
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

export const TableComponents: Story = {
  args: {},
}

export const RatingComponent: Story = {
  parameters: {
    docs: {
      description: {
        story: '`RatingComponent` displays the rating',
      },
    },
  },
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
        <Rating value={5} />
        <Rating value={4} />
        <Rating value={3} />
        <Rating value={2} />
        <Rating value={1} />
        <Rating value={0} />
      </div>
    )
  },
}

export const RatingWithCallback = () => {
  const [value, setValue] = useState(3)

  const onChangeRating = (value: number) => {
    setValue(value)
  }

  return <Rating callBack={onChangeRating} value={value} />
}

export const Trend: Story = {
  render: () => <TrendIndicator name={'Name'} />,
}

export const Icons = () => {
  const onClickHandler = (e: any, iconName: any) => {
    action('onClickIcon')(`${iconName} , event -`, e)
  }

  return (
    <div style={{ alignItems: 'center', columnGap: '10px', display: 'flex' }}>
      <Info onClick={e => onClickHandler(e, 'Info')} />
      <Edit onClick={e => onClickHandler(e, 'Edit')} />
      <Trash onClick={e => onClickHandler(e, 'Trash')} />
    </div>
  )
}
