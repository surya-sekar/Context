import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContextProvider'

const DecreaseCounter = () => {

    const { handleIncrease } = useContext(CounterContext);

    return (
        <button className='btn btn-primary' onClick={handleIncrease}>+</button>
    )
}

export default DecreaseCounter
