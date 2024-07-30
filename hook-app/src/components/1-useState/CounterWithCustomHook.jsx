import './counter.css';
import { useCounter } from '../../hooks/useCounter';


const CounterWithCustomHook = () => {
    
    const { state: state1, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1> Counter With Hoook: { state1 } </h1>
            <hr />

            <button className='btn btn-primary mx-1' onClick={ () => increment(2) }> + 1 </button>
            <button className='btn btn-danger mx-1' onClick={ reset }> Reset </button>
            <button className='btn btn-primary mx-1' onClick={ () => decrement(2) }> - 1 </button>
        </>
    )
};

export default CounterWithCustomHook;