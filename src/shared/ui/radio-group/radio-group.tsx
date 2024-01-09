import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import s from './radio-group.module.scss'

const RadioGroupElement = (props) => {
    const {title} = props
    return (
        <div className={s.RadioGroupItem}>
            <RadioGroupPrimitive.Item className={s.RadioGroupCheckbox} value="default" id="r1">
                <RadioGroupPrimitive.Indicator className={s.RadioGroupIndicator}/>
            </RadioGroupPrimitive.Item>
            <label className="Label" htmlFor="r1">
                {title}
            </label>
        </div>
    )
}

export function RadioGroup() {
    return (
        <RadioGroupPrimitive.Root className={s.RadioGroupRoot} defaultValue="default" aria-label="View density">
           <RadioGroupElement title={'RadioGroup'}/>
        </RadioGroupPrimitive.Root>
    )
}

