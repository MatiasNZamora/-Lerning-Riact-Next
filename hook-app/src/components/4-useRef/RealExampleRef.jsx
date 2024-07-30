import { useState } from 'react';
import { MultipleCustomHooks } from '../3-examples/MultipleCustomHooks';

import '../2-useEfect/useEffect.css';


export const RealExampleRef = () => {
    
    const [show, setShow] = useState(false)
    
    return (
        <>
            <h1> Real Example Ref </h1>
            <hr />

            {show && <MultipleCustomHooks />}

            <button
                className='btn btn-primary mt-5'
                onClick={ () => { setShow(!show) } }
            >
                Show / Hide
            </button>
        </>
    );
};

