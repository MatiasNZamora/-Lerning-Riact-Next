import { useRef } from 'react';
import '../2-useEfect/useEffect.css'

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <>
            <h1>focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef }
                className='form-control'
                placeholder='Su nombre'
            /> 

            <button 
                className='btn btn-outline-primary mt-5'
                onClick={handleClick}
            >
                Focus
            </button>
        </>
    );
};

