import { findByLabelText } from '@testing-library/dom';
import React, { useReducer } from 'react'

const center = {
    display: 'inline-block',
    marginTop: '10%'
}

const value = 0;

const reducer = (state, action) => {
    switch(action){
        case 'plus':
            return state + 1
        case 'minus':
            return state - 1
        case 'reset':
            return state = 0
        default:
            return state
    }
}

const ReducerCounter = () => {
    
    const [count, setCount] = useReducer(reducer, value)

    return(
        <div className='container' style={center}>
        <h1>Counter Using Reducer Hook</h1>
        <button className='btn btn-warning' onClick={() => setCount('plus')}>+</button>
        <h2>{count}</h2>
        <button className='btn btn-warning' onClick={() => setCount('minus')}>-</button>
        <br/>
        <br/>
        <button className='btn btn-danger' onClick={() => setCount('reset')}>Reset</button>
        </div>
    );
}

export default ReducerCounter;