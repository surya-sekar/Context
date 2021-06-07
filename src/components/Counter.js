import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContextProvider'
import DecreaseCounter from './DecreaseCounter';
import IncreaseCounter from './IncreaseCounter';
import ResetCounter from './ResetCounter';

function Counter ()  {

    const { count } = useContext(CounterContext);

    return (
        <div>
            <h1>Counter</h1>
            <IncreaseCounter />
            <h2>{count}</h2>
            <DecreaseCounter />
            <div>
            <br/>
            <ResetCounter />
            </div>
            
        </div>
    )
}

export default Counter
