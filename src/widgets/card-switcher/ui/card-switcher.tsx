import { Tabs } from 'shared/ui/tabs'
import { Typography } from 'shared/ui/typography'

export function CardSwitcher() {
  return (
    <>
      <Typography as={'h2'} variant={'body2'}>
        Show packs cards
      </Typography>
      <Tabs.TabsRoot defaultValue={'1'}>
        <Tabs.TabsList>
          <Tabs.TabsBtn value={'1'}>
            <Typography as={'span'} variant={'body1'}>
              All Cards
            </Typography>
          </Tabs.TabsBtn>
          <Tabs.TabsBtn value={'2'}>
            <Typography as={'span'} variant={'body1'}>
              My Cards
            </Typography>
          </Tabs.TabsBtn>
        </Tabs.TabsList>
      </Tabs.TabsRoot>
    </>
  )
}
