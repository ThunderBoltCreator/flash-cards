import { useState } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'
import CheckboxIcon from 'shared/ui/checkbox/CheckboxIcon'
import { Typography } from 'shared/ui/typography'

import s from './checkbox.module.scss'

type CheckboxProps = {
  label?: string
  onChange?: (checked: boolean) => void
} & CheckboxRadix.CheckboxProps

export function Checkbox({
  checked = false,
  className,
  disabled,
  label,
  onChange,
  ...props
}: CheckboxProps) {
  const styles = {
    checkbox: s.checkbox,
    frame: s.frame,
    indicator: s.indicator,
    label: clsx(s.label, disabled && s.disabled),
    root: clsx(s.root, className),
    wrapper: clsx(s.buttonWrapper, disabled && s.disabled),
  }
  const [check, setCheck] = useState(checked)

  return (
    <div className={styles.root}>
      <LabelRadix.Root asChild className={'ya as child'}>
        <Typography as={'label'} className={styles.label} variant={'body2'}>
          <CheckboxRadix.Root
            checked={check}
            className={styles.checkbox}
            defaultChecked={false}
            disabled={disabled}
            onCheckedChange={value => setCheck(value)}
            {...props}
          >
            <div className={styles.frame} />
            {check && (
              <CheckboxRadix.Indicator className={styles.indicator}>
                <CheckboxIcon />
              </CheckboxRadix.Indicator>
            )}
          </CheckboxRadix.Root>
          {label}
        </Typography>
      </LabelRadix.Root>
    </div>
  )
}
