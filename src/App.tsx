import { useState } from 'react'

import { Button } from 'shared/ui/button/button'
import { Header } from 'shared/ui/header/header'
import { Select } from 'shared/ui/select/select'
import { Slider } from 'shared/ui/slider'
import { TextFields } from 'shared/ui/text-field'
import { CardSwitcher } from 'widgets/card-switcher/ui/card-switcher'

export function App() {
  const [sliderValues, setSliderValues] = useState<number[]>([10, 50])

  return (
    <div>
      <Header rightSlot={<Button>Button</Button>} />
      Hello
      <Button as={'div'}>Knopka</Button>
      <TextFields.Search placeholder={'sdasds'} />
      <TextFields.Password placeholder={'sdasds'} />
      <TextFields.BaseField placeholder={'sdasds'} />
      <Slider
        max={50}
        min={10}
        onValueChange={setSliderValues}
        style={{ maxWidth: '300px' }}
        value={sliderValues}
      />
      <CardSwitcher />
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
      </div>
    </div>
  )
}
