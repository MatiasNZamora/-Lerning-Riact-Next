import { useEffect, useState } from 'react';
import './useEffect.css';
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [ formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState;

    useEffect (() => { 
        // console.log('hey !!!');
    }, []) ;
    
    useEffect (() => { 
        // console.log('formState Cambio');
    }, [formState]) ;

    useEffect (() => { 
        // console.log('email Cambio');
    }, [email]) ;

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]:target.value
        });
    };  
    
    return (
        <>
            <h1> useEffect </h1>
            <hr />
            <div className='form-grup'>
                <input 
                    type="text"
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className='form-grup'>
                <input 
                    type="text"
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { (name === '123') && <Message /> }
        </>
    )
};
