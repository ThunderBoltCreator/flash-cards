import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import s from './radio-group.module.scss'

export function RadioGroup() {
    return (
        <RadioGroupPrimitive.Root className={s.RadioGroupRoot} defaultValue="default" aria-label="View density">
            <div style={{display: 'flex', alignItems: 'center'}}>
                <RadioGroupPrimitive.Item className={s.RadioGroupItem} value="default" id="r1">
                    <RadioGroupPrimitive.Indicator className={s.RadioGroupIndicator}/>
                </RadioGroupPrimitive.Item>
                <label className="Label" htmlFor="r1">
                    RadioGroup
                </label>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <RadioGroupPrimitive.Item className={s.RadioGroupItem} value="default" id="r1">
                    <RadioGroupPrimitive.Indicator className={s.RadioGroupIndicator}/>
                </RadioGroupPrimitive.Item>
                <label className="Label" htmlFor="r1">
                    RadioGroup
                </label>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <RadioGroupPrimitive.Item className={s.RadioGroupItem} value="default" id="r1">
                    <RadioGroupPrimitive.Indicator className={s.RadioGroupIndicator}/>
                </RadioGroupPrimitive.Item>
                <label className="Label" htmlFor="r1">
                    RadioGroup
                </label>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <RadioGroupPrimitive.Item className={s.RadioGroupItem} value="default" id="r1">
                    <RadioGroupPrimitive.Indicator className={s.RadioGroupIndicator}/>
                </RadioGroupPrimitive.Item>
                <label className="Label" htmlFor="r1">
                    RadioGroup
                </label>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <RadioGroupPrimitive.Item className={s.RadioGroupItem} value="default" id="r1">
                    <RadioGroupPrimitive.Indicator className={s.RadioGroupIndicator}/>
                </RadioGroupPrimitive.Item>
                <label className="Label" htmlFor="r1">
                    RadioGroup
                </label>
            </div>
        </RadioGroupPrimitive.Root>
    )
}