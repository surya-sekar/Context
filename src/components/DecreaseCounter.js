import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContextProvider'

const DecreaseCounter = () => {

    const { handleDecrease } = useContext(CounterContext);
    console.log('Decrease')

    return(
        <button className='btn btn-primary' onClick={handleDecrease}>-</button>
    )
}

export default DecreaseCounter
