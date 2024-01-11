import { useState } from 'react'
import type { ComponentPropsWithoutRef, KeyboardEvent } from 'react'

import * as Sl from '@radix-ui/react-slider'
import { clsx } from 'clsx'
import { isValidInputValue } from 'shared/lib/reg-exp/isValidInputValue'
import { TextFields } from 'shared/ui/text-field'

import s from './slider.module.scss'
export function Slider({
  className,
  max = 10,
  min = 0,
  onValueChange,
  step,
  value,
  ...props
}: ComponentPropsWithoutRef<typeof Sl.Root>) {
  const [inputValues, setInputValues] = useState<string[]>([min.toString(), max.toString()])

  const onInputChange = (index: number, newInputValue: string) => {
    if (isValidInputValue(/^-?(0[1-9]*|[1-9]\d*)(\.\d+)?$|^$/, newInputValue)) {
      const updatedInputValues = [...inputValues]

      updatedInputValues[index] = newInputValue
      setInputValues(updatedInputValues)
    }
  }

  const applyUpdateInput = () => {
    const newValues = inputValues.map(e => {
      if (+e > max) {
        return max
      }
      if (+e < min) {
        return min
      }

      return +e
    })

    onValueChange?.(newValues.sort())
    setInputValues(newValues.map(String))
  }

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      applyUpdateInput()
    }
  }

  const onBlur = () => {
    applyUpdateInput()
  }

  const onSliderChange = (value: number[]) => {
    onValueChange?.(value)
    setInputValues(value.map(e => e.toString()))
  }

  return (
    <>
      <div className={clsx(s.root, className)}>
        <TextFields.BaseField
          className={s.score}
          onBlur={onBlur}
          onChange={e => onInputChange(0, e.currentTarget.value)}
          onKeyDown={onPressEnter}
          type={'number'}
          value={inputValues[0]}
        />
        <Sl.Root
          className={s.root_slider}
          max={max}
          min={min}
          onValueChange={onSliderChange}
          step={step || 1}
          value={value}
          {...props}
        >
          <Sl.Track className={s.track}>
            <Sl.Range className={s.range} />
          </Sl.Track>
          <Sl.Thumb className={s.thumb} />
          <Sl.Thumb className={s.thumb} />
        </Sl.Root>
        <TextFields.BaseField
          className={s.score}
          onBlur={onBlur}
          onChange={e => onInputChange(1, e.currentTarget.value)}
          onKeyDown={onPressEnter}
          type={'number'}
          value={inputValues[1]}
        />
      </div>
    </>
  )
}
