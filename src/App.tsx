import { Button } from '@/shared/ui/button/button'
import { Header } from '@/shared/ui/header/header'
import { TextFields } from '@/shared/ui/text-field'

export function App() {
  return (
    <div>
      <Header rightSlot={<Button>Button</Button>} />
      Hello
      <Button as={'div'}>Knopka</Button>
      <TextFields.search placeholder={'sdasds'} />
      <TextFields.password placeholder={'sdasds'} />
      <TextFields.default placeholder={'sdasds'} />
    </div>
  )
}
