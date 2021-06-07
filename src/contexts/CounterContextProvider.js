import {useState, createContext} from 'react'

export const CounterContext = createContext();

function CounterContextProvider (props) {

    const [ count, setCount ] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1)
    }

    const handleDecrease = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    const value = { count, handleDecrease, handleIncrease, handleReset }

    return(
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;