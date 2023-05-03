import React from 'react';
import CounterBord from "./CounterBord/CounterBord";
import UniversalButton from "../UniversalButton/UniversalButton";
import s from './Counter.module.css'

type CounterPropsType = {
    counterValue: number
    incrementCallback: () => void
    resetCallback: () => void
    startValue: number
    maxValue: number
    disableIncrementBtn: boolean
message: string
}


const Counter = (props: CounterPropsType) => {
    const disableIncrementButton = props.counterValue === props.maxValue
    const disabledResetButton = props.startValue >= props.counterValue

    return (
        <div className={s.counter}>
            <CounterBord counterValue={props.counterValue} maxValue={props.maxValue} message={props.message}/>
            <div className={s.btnField}>
                <UniversalButton title={"INC"} disabled={disableIncrementButton} callback={props.incrementCallback}/>
                <UniversalButton title={"RESET"} disabled={disabledResetButton} callback={props.resetCallback}/>
            </div>

        </div>
    );
};

export default Counter;