import { useState } from 'react'
import type { ComponentPropsWithoutRef, KeyboardEvent } from 'react'

import * as Sl from '@radix-ui/react-slider'
import { clsx } from 'clsx'
import { isValidInputValue } from 'shared/lib/reg-exp/isValidInputValue'
import { TextFields } from 'shared/ui/text-field'

import s from './slider.module.scss'
export function Slider({
  className,
  disabled,
  max = 10,
  min = 0,
  onValueChange,
  step,
  value,
  ...props
}: ComponentPropsWithoutRef<typeof Sl.Root>) {
  const [inputValues, setInputValues] = useState<(number | string)[]>([
    value?.[0] || min,
    value?.[1] || max,
  ])

  const styles = {
    container: clsx(s.container, className),
    range: clsx(s.range),
    score: clsx(s.score, disabled && s.disabled),
    slider: clsx(s.slider),
    thumb: clsx(s.thumb, disabled && s.disabled),
    track: clsx(s.track),
  }

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
    setInputValues(newValues)
  }

  const onPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur()
      applyUpdateInput()
    }
  }

  const onBlur = () => {
    applyUpdateInput()
  }

  const onSliderChange = (value: number[]) => {
    onValueChange?.(value)
    setInputValues(value)
  }

  return (
    <>
      <div className={styles.container}>
        <TextFields.BaseField
          className={styles.score}
          disabled={disabled}
          onBlur={onBlur}
          onChange={e => onInputChange(0, e.currentTarget.value)}
          onKeyDown={onPressEnter}
          type={'number'}
          value={inputValues[0]}
        />
        <Sl.Root
          className={styles.slider}
          disabled={disabled}
          max={max}
          min={min}
          onValueChange={onSliderChange}
          step={step || 1}
          value={value}
          {...props}
        >
          <Sl.Track className={styles.track}>
            <Sl.Range className={styles.range} />
          </Sl.Track>
          <Sl.Thumb className={styles.thumb} />
          <Sl.Thumb className={styles.thumb} />
        </Sl.Root>
        <TextFields.BaseField
          className={styles.score}
          disabled={disabled}
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
