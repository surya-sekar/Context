import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContextProvider'

const IncreaseCounter = () => {

    const { handleIncrease } = useContext(CounterContext);

    return (
        <button className='btn btn-primary' onClick={handleIncrease}>+</button>
    )
}

export default IncreaseCounter;