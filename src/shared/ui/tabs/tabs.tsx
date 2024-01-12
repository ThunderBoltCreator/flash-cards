import * as RadixTabs from '@radix-ui/react-tabs'
import { clsx } from 'clsx'

import s from './tabs.module.scss'
const TabsRoot = RadixTabs.Root

const TabsList = ({ className, ...props }: RadixTabs.TabsListProps) => (
  <RadixTabs.List className={clsx(s.list, className)} {...props} />
)

const TabsBtn = ({ className, ...props }: RadixTabs.TabsTriggerProps) => (
  <RadixTabs.Trigger className={clsx(s.btn, className)} {...props} />
)

const TabsContent = ({ className, ...props }: RadixTabs.TabsContentProps) => (
  <RadixTabs.Content className={clsx(s.content, className)} {...props} />
)

export const Tabs = { TabsBtn, TabsContent, TabsList, TabsRoot }
