import { useState } from 'react'
import type { ComponentPropsWithoutRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'
import { clsx } from 'clsx'
import CheckboxIcon from 'shared/ui/checkbox/CheckboxIcon'
import { Typography } from 'shared/ui/typography'

import s from './checkbox.module.scss'

type CheckboxProps = {
  label?: string
  onChange?: (checked: boolean) => void
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

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
    root: clsx(s.root),
  }
  const [check, setCheck] = useState(checked)

  return (
    // <div className={}>
    <LabelRadix.Root asChild className={styles.root}>
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
    // </div>
  )
}
