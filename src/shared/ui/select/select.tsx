import React, { useState } from 'react'

import * as Select from '@radix-ui/react-select'
import { ChervonDown } from 'shared/assets/icons/chervon-down'
import { ChervonUp } from 'shared/assets/icons/chervon-up'

import s from './select.module.scss'

type CustomSelectProps = {
  disabled?: boolean
  items: { label: string; value: string }[]
}

const sliceText = (value: string) => {
  if (value.length > 22) {
    return `${value.substring(0, 18)} ...`
  }

  return value
}

export const CustomSelect = (props: CustomSelectProps) => {
  const [open, setOpen] = useState(false)

  const [selectValue, setSelectValue] = useState(sliceText(props.items[0].value))

  const { disabled = false, items } = props

  const onValueChangeHandler = (value: string) => {
    setSelectValue(sliceText(value))
  }

  return (
    <div
      className={`${s.root} ${open ? s.selectOpen : ''} ${disabled ? s.selectDisabled : ''}`}
      tabIndex={0}
    >
      <Select.Root
        disabled={disabled}
        onOpenChange={setOpen}
        onValueChange={onValueChangeHandler}
        value={selectValue}
      >
        <div className={s.main}>
          <Select.Trigger>
            <div className={s.main_content}>
              <Select.Value>{selectValue}</Select.Value>
              <Select.Icon className={'SelectIcon'}>
                {open ? <ChervonUp /> : <ChervonDown />}
              </Select.Icon>
            </div>
          </Select.Trigger>
        </div>

        <Select.Content className={s.selectItems} position={'popper'}>
          <Select.ScrollUpButton />
          <Select.Viewport>
            <Select.Group>
              {items.map(item => {
                return (
                  <SelectItem className={s.selectItem} key={item.value} value={item.value}>
                    {item.value}
                  </SelectItem>
                )
              })}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Root>
    </div>
  )
}

type SelectProps = {
  children: React.ReactNode
  className?: string
  value: string
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item {...props} className={s.item} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    )
  }
)
