import { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './useEffect.css';

export const FormWhitCustomHook = () => {
    
    const [ formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues;
    
    useEffect( () => {
        console.log(' El email cambio ');
    },[ email ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    };


    return (
        <form onSubmit={ handleSubmit }>
            <h1> useEffect </h1>
            <hr />
            <div className='form-grup mt-3'>
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

            <div className='form-grup mt-3'>
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

            <div className='form-grup mt-3'>
                <input 
                    type="password"
                    name='password'
                    className='form-control'
                    placeholder='******'
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            <button type='submit' className='btn btn-primary mt-3'>
                Enviar
            </button>
        </form>
    )
};
