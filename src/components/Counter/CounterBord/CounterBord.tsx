import React from 'react';
import s from './CounterBord.module.css'

type CounterBordProps = {
    counterValue : number
    maxValue : number
    message: string
}

const CounterBord = (props: CounterBordProps) => {
   const stopClass = props.counterValue === props.maxValue ? s.stopClass : ""
    return (
        <div className={s.counterBord + ' ' + stopClass }>
            {props.message ? <div className={s.counterBord}>{props.message}</div>: <div className={s.counterBord + ' ' + stopClass}>{props.counterValue}</div>}
        </div>
    );
};

export default CounterBord;