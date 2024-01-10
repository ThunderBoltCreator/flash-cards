import React, { useState } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import { ChervonDown } from 'shared/assets/icons/chervon-down'
import { ChervonUp } from 'shared/assets/icons/chervon-up'

import s from './select.module.scss'

type SelectProps = {
  disabled?: boolean
  items: { label: string; value: string }[]
} & SelectRadix.SelectProps

const sliceText = (value: string) => {
  if (value.length > 22) {
    return `${value.substring(0, 18)} ...`
  }

  return value
}

export const Select = (props: SelectProps) => {
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
      <SelectRadix.Root
        disabled={disabled}
        onOpenChange={setOpen}
        onValueChange={onValueChangeHandler}
        value={selectValue}
      >
        <div className={s.main}>
          <SelectRadix.Trigger>
            <div className={s.main_content}>
              <SelectRadix.Value className={s.test}>{selectValue}</SelectRadix.Value>
              <SelectRadix.Icon className={'SelectIcon'}>
                {open ? <ChervonUp /> : <ChervonDown />}
              </SelectRadix.Icon>
            </div>
          </SelectRadix.Trigger>
        </div>
        <SelectRadix.Portal>
          <SelectRadix.Content className={s.selectItems} position={'popper'}>
            <SelectRadix.ScrollUpButton />
            <SelectRadix.Viewport>
              {items.map(item => {
                return (
                  <SelectItem className={s.selectItem} key={item.value} value={item.value}>
                    {item.value}
                  </SelectItem>
                )
              })}
            </SelectRadix.Viewport>
            <SelectRadix.ScrollDownButton />
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </div>
  )
}

type SelectItemProps = {
  children: React.ReactNode
  className?: string
  value: string
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <SelectRadix.Item {...props} className={s.item} ref={forwardedRef}>
        <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
      </SelectRadix.Item>
    )
  }
)
