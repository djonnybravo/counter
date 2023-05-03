import React, {useEffect, useState} from 'react';

import './App.css';
import Counter from "./components/Counter/Counter";
import CounterSettings from "./components/Counter/CounterSettings/CounterSettings";

function App() {

    const [startValue, setStartValue] = useState(0)
    const [counterValue, setCounter] = useState(startValue)
    const [maxValue, setMaxValue] = useState(0)
    const [message, setMessage] = useState('')
    const [disableIncrementBtn, setDisableIncrementBtn] = useState(true)
    // --------CALLBACKS-----------
    const incrementCallback = () => {
       // counterValue === maxValue ? setDisableIncrementBtn(true) : setCounter(counterValue + 1)
        setCounter(counterValue + 1)
    }
    const resetCallback = () => {
        setCounter(startValue)
    }
    const setSettings = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setCounter(startValue)
        setMessage('')
        setDisableIncrementBtn(false)
    }

    // _________LOCALSTORAGE___________

    let savedStartValue = localStorage.getItem('startValue')
    let savedMaxValue = localStorage.getItem('maxValue')
    const getValueFromLocalStorage = () => {

        if (savedStartValue) {
            let savedStartValueAsNumber = JSON.parse(savedStartValue)
            setStartValue(savedStartValueAsNumber)
        }
        if (savedMaxValue) {
            let savedMaxValueAsNumber = JSON.parse(savedMaxValue)
            setMaxValue(savedMaxValueAsNumber)
        }
        }
    useEffect(getValueFromLocalStorage, [])



    return (
        <div className="App">
            <CounterSettings  setSettings={setSettings}
                              startValue = {startValue}
                              maxValue = {maxValue}
                              setStartValue = {setStartValue}
                              setMaxValue = {setMaxValue}
                              setMessage = {setMessage}
            />

            <Counter counterValue={counterValue}
                     incrementCallback={incrementCallback}
                     resetCallback={resetCallback}
                     startValue = {startValue}
                     maxValue = {maxValue}
                     message = {message}
                     disableIncrementBtn = {disableIncrementBtn}
            />
        </div>
    );
}

export default App;
