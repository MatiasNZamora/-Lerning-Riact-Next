import { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/preocesoPesado';

import '../2-useEfect/useEffect.css';


export const MemoHook = () => {
    
    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);


    const memoPorcessoPesado = useMemo( () => procesoPesado(counter), [counter] );


    return (
        <>
            <h1>MemoHook</h1>
            <h3> Counter: <small>{counter}</small> </h3>
            <hr />

            <p> { memoPorcessoPesado } </p>
            
            <button 
                className='btn btn-primary mx-3'
                onClick={increment}
            >
                + 1
            </button>

            <button 
                className='btn btn-outline-primary ml-3'
                onClick={ () => {setShow(!show) } }
            >
                Show / Hide { JSON.stringify(show) }
            </button>

        </>
    );
};
