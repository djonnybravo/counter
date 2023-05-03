import React from 'react';
import s from './UniversalButton.module.css'

type UniversalButtonType = {
    title: string,
    disabled?: boolean
    callback?: () => void
}


const UniversalButton = (props: UniversalButtonType) => {
    return <button
        onClick={props.callback}
        disabled={props.disabled}
        className={s.UniBtn}>
        {props.title}
    </button>


};

export default UniversalButton;