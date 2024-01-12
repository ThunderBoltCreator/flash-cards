import type { ComponentPropsWithoutRef } from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import s from './radio-group.module.scss'

type RadioRootProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
  options: Option[]
}
type RadioElementProps = ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
  label: string
}

type Option = {
  label: string
  value: string
}

export function RadioGroup({ options, ...props }: RadioRootProps) {
  return (
    <RadioGroupPrimitive.Root className={s.radioGroupRoot} {...props}>
      {options.map(option => (
        <RadioGroupElement key={option.value} label={option.label} value={option.value} />
      ))}
    </RadioGroupPrimitive.Root>
  )
}

const RadioGroupElement = (props: RadioElementProps) => {
  const { label } = props

  return (
    <div className={s.radioGroupElement}>
      <RadioGroupPrimitive.Item className={s.radioGroupCheckbox} value={'default'}>
        <RadioGroupPrimitive.Indicator className={s.radioGroupIndicator} />
      </RadioGroupPrimitive.Item>
      <label className={s.label}>{label}</label>
    </div>
  )
}
