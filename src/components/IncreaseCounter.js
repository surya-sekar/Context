import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContextProvider'

const IncreaseCounter = () => {

    const { handleDecrease } = useContext(CounterContext);

    return(
        <button className='btn btn-primary' onClick={handleDecrease}>-</button>
    )
}

export default IncreaseCounter;