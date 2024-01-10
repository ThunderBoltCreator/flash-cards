import { Tabs } from 'shared/ui/tabs'
import { Typography } from 'shared/ui/typography'

export function CardSwitcher() {
  return (
    <div>
      <Typography variant={'body2'}>Show packs cards</Typography>
      <Tabs.TabsRoot>
        <Tabs.TabsList>
          <Tabs.TabsBtn value={'1'}>
            <Typography as={'span'} variant={'body1'}>
              My Cards
            </Typography>
          </Tabs.TabsBtn>
          <Tabs.TabsBtn value={'2'}>
            <Typography as={'span'} variant={'body1'}>
              All Cards
            </Typography>
          </Tabs.TabsBtn>
        </Tabs.TabsList>
      </Tabs.TabsRoot>
    </div>
  )
}
