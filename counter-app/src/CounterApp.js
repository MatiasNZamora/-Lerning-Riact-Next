import PropTypes from 'prop-types'
import { useState } from 'react';

const CounterApp = ( { value } ) => {

    const [counter, setCounter] = useState(0); // retorna un arreglo con dos valores


    const hadleadd = () => {
        setCounter(counter +1);
    };

    const hadleres = () => {
        setCounter(counter -1);
    };

    const hadlereset = () => {
        setCounter(value);
    };

    return(
        <>
            <h1> Counter App </h1>
            <h3> { counter } </h3>
            <button onClick={ hadleadd }> + 1 </button>
            <button onClick={ hadlereset }> reset </button>
            <button onClick={ hadleres}> - 1 </button>
        </>
    );
};

CounterApp.protoType = {
    value: PropTypes.number
}


export default CounterApp;