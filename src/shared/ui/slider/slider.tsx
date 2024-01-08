import type { SliderProps } from '@radix-ui/react-slider'

import { useState } from 'react'
import type { KeyboardEvent } from 'react'

import * as Sl from '@radix-ui/react-slider'
import { clsx } from 'clsx'
import { isValidInputValue } from 'shared/lib/reg-exp/isValidInputValue'
import { TextFields } from 'shared/ui/text-field'

import s from './slider.module.scss'
export function Slider({ className, max = 10, min = 0, ...props }: SliderProps) {
  const [sliderValues, setSliderValues] = useState<number[]>([min, max])
  const [inputValues, setInputValues] = useState<string[]>([min.toString(), max.toString()])

  const onInputChange = (index: number, newInputValue: string) => {
    if (isValidInputValue(/^(0[1-9]*|[1-9]\d*)(\.\d+)?$|^$/, newInputValue)) {
      const updatedInputValues = [...inputValues]

      updatedInputValues[index] = newInputValue
      setInputValues(updatedInputValues)
    }
  }

  const onInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newValues = inputValues.map(e => {
        if (+e > max) {
          return max
        }
        if (+e < min) {
          return min
        }

        return e
      })

      if (+newValues[0] > +newValues[1]) {
        newValues.reverse()
        setSliderValues(newValues.map(e => +e))
        setInputValues(newValues.map(e => e.toString()))
      } else {
        setSliderValues(newValues.map(e => +e))
        setInputValues(newValues.map(e => e.toString()))
      }
    }
  }

  const onSliderChange = (value: number[]) => {
    setSliderValues(value)
    setInputValues(value.map(e => e.toString()))
  }

  return (
    <>
      <div className={clsx(s.root, className)}>
        <TextFields.BaseField
          className={s.score}
          onChange={e => onInputChange(0, e.currentTarget.value)}
          onKeyDown={onInputKeyDown}
          type={'number'}
          value={inputValues[0]}
        />
        <Sl.Root
          max={max}
          min={min}
          {...props}
          className={s.root_slider}
          defaultValue={sliderValues}
          onValueChange={onSliderChange}
          step={1}
          value={sliderValues}
        >
          <Sl.Track className={s.track}>
            <Sl.Range className={s.range} />
          </Sl.Track>
          <Sl.Thumb className={s.thumb} />
          <Sl.Thumb className={s.thumb} />
        </Sl.Root>
        <TextFields.BaseField
          className={s.score}
          onChange={e => onInputChange(1, e.currentTarget.value)}
          onKeyDown={onInputKeyDown}
          type={'number'}
          value={inputValues[1]}
        />
      </div>
    </>
  )
}
