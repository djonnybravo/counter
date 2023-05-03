import React, {ChangeEvent, useState} from 'react';
import s from "./CounterSettings.module.css";
import UniversalButton from "../../UniversalButton/UniversalButton";




type CounterSettingsPropsType ={
    setSettings: () => void
    setStartValue: (startValue:number) => void
    setMaxValue: (maxValue:number) => void
    setMessage: (message: string) => void
    startValue: number
    maxValue: number
}

const CounterSettings = (props:CounterSettingsPropsType) => {
 const [disableSetButton, setDisableSetButton] = useState(true)
 const maxValueInputClass = props.maxValue < 0 ? s.error : ''
 const startValueInputClass = props.startValue < 0 || props.startValue > props.maxValue ? s.error : ''
    const getMaxValueFromInput = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
           let value = Number(e.currentTarget.value)
            props.setMaxValue(value)
            if (value < 0) {
                props.setMessage('ERROR')
                setDisableSetButton(true)
            }else if (value >= 0) {
                props.setMessage('Input and SET')
                setDisableSetButton(false)
            }
        }
    }
    const getStartValueFromInput = (e:ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
           let value = Number(e.currentTarget.value)
            props.setStartValue(value)
            if (value < 0 || value > props.maxValue) {
                props.setMessage('ERROR')
                setDisableSetButton(true)
            } else {
                props.setMessage('Input and SET')
                setDisableSetButton(false)
            }
        }
    }



    return (

            <div className={s.counterSettings}>

                <div className={s.settingsBord}>
                    <span> max Value:</span>
                    <input type={"number"} className={maxValueInputClass} onChange={getMaxValueFromInput} value={props.maxValue}/>
                </div>

                <div className={s.settingsBord}>
                    <span> start Value:</span>
                    <input type={"number"} className={startValueInputClass} onChange={getStartValueFromInput} value={props.startValue}/>
                </div>

                <div className={s.btnField}>
                    <UniversalButton title={"SET"} callback={props.setSettings} disabled={disableSetButton}/>
                </div>

            </div>
    );
};

export default CounterSettings;