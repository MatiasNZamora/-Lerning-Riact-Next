import React, { useState } from 'react'

export const AddCategory = ({setCategorys}) => {
    
    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) => { 
        setinputValue(e.target.value);
        // console.log(inputValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategorys(cats => [ inputValue, ...cats ])
            setinputValue('');
        }

    }
    
    return (

        <form onSubmit={ handleSubmit }>
            <input 
                type='text' 
                value={ inputValue }
                onChange={ handleInputChange }
            /> 
        </form>

)

};
