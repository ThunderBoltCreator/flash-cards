import { Button } from 'shared/ui/button/button'
import { Header } from 'shared/ui/header/header'
import { TextFields } from 'shared/ui/text-field'

export function App() {
  return (
    <div>
      <Header rightSlot={<Button>Button</Button>} />
      Hello
      <Button as={'div'}>Knopka</Button>
      <TextFields.Search placeholder={'sdasds'} />
      <TextFields.Password placeholder={'sdasds'} />
      <TextFields.Base placeholder={'sdasds'} />
    </div>
  )
}
