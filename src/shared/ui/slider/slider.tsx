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
  const [currentMin, currentMax] = value || [min, max]
  const [inputValues, setInputValues] = useState<(number | string)[]>([currentMin, currentMax])

  const styles = {
    container: clsx(s.container, className),
    range: clsx(s.range),
    score: clsx(s.score, disabled && s.disabled),
    slider: clsx(s.slider),
    thumb: clsx(s.thumb, disabled && s.disabled),
    track: clsx(s.track),
  }

  const onInputChange = (index: number, newInputValue: string) => {
    if (isValidInputValue(/^-?(0(\.\d{0,3})?|[1-9]\d*(\.\d{0,3})?)?$/, newInputValue)) {
      const updatedInputValues = [...inputValues]

      updatedInputValues[index] = parseInt(newInputValue)
      setInputValues(updatedInputValues)
    }
  }

  const applyUpdateInput = () => {
    const newValues = inputValues.map((e, index) => {
      const current = +e
      const firstValue = +inputValues[0]
      const secondValue = +inputValues[1]

      if (index === 0 && current > secondValue) {
        if (+e < min) {
          return min
        }

        return currentMax
      }

      if (index === 1 && +e < firstValue) {
        if (+e > max) {
          return max
        }

        return currentMin
      }

      return Math.round(+e)
    })

    onValueChange?.(newValues)
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
