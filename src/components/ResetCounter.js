import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContextProvider'

const ResetCounter = () => {

    const { handleReset } = useContext(CounterContext);

    return (
        <button className='btn btn-success' onClick={handleReset}>Reset</button>
    )
}

export default ResetCounter
