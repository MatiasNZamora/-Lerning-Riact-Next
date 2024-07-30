

import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../2-useEfect/useEffect.css';


export const CallbackHook = () => {
    
    const [counter, setCounter] = useState(10);
    
    // const increment = () => {
    //     setCounter(counter + 1);
    // };
    
    const increment = useCallback( (num) => {
        setCounter(c => c + num );
    }, [setCounter]);



    return (
        <>
            <h1>useCallbackHook: {counter}</h1>
            <hr />
            <ShowIncrement increment={ increment } /> 
        </>
    )
}
