import { Button } from 'shared/ui/button/button'
import { Header } from 'shared/ui/header/header'
import { Select } from 'shared/ui/select/select'
import { Slider } from 'shared/ui/slider'
import { Table } from 'shared/ui/table/table'
import { TextFields } from 'shared/ui/text-field'

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
      <div>
        <Select
          items={[
            {
              label: 'select 1',
              value: 'Select 1',
            },
            { label: 'select 2', value: 'Select 2' },
            { label: 'select 3', value: 'Select 3' },
          ]}
        />
        <Table />
      </div>
    </div>
  )
}
