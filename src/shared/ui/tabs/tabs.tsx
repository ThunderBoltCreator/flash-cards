import type { ComponentPropsWithoutRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs.module.scss'
const TabsRoot = RadixTabs.Root

const TabsList = ({ className, ...props }: ComponentPropsWithoutRef<typeof RadixTabs.List>) => (
  <RadixTabs.List className={clsx(s.list, className)} {...props} />
)

const TabsBtn = ({
  className,
  disabled,
  ...props
}: ComponentPropsWithoutRef<typeof RadixTabs.Trigger>) => (
  <RadixTabs.Trigger className={clsx(s.btn, className, disabled && s.disabled)} {...props} />
)

const TabsContent = ({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof RadixTabs.Content>) => (
  <RadixTabs.Content className={clsx(s.content, className)} {...props} />
)

export const Tabs = { TabsBtn, TabsContent, TabsList, TabsRoot }
