import { Button } from 'shared/ui/button/button'
import { Header } from 'shared/ui/header/header'
import { Slider } from 'shared/ui/slider'
import { TextFields } from 'shared/ui/text-field'
import { CardSwitcher } from 'widgets/card-switcher/ui/card-switcher'

export function App() {
  return (
    <div>
      <Header rightSlot={<Button>Button</Button>} />
      Hello
      <Button as={'div'}>Knopka</Button>
      <TextFields.Search placeholder={'sdasds'} />
      <TextFields.Password placeholder={'sdasds'} />
      <TextFields.BaseField placeholder={'sdasds'} />
      <Slider max={100} min={10} />
      <CardSwitcher />
    </div>
  )
}
