import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../2-useEfect/useEffect.css'

export const MultipleCustomHooks = () => {
    

    const {counter, increment} = useCounter(1);


    const {loading, data} = useFetch( `https://api.breakingbadquotes.xyz/v1/quotes/${counter}` );
    const {author, quote} = !!data && data[0]; // es una condicion logica que dice si existe la data entonces extrae la posicion 0 de la data

    // console.log(state);
    // console.log(author, quote)     

    return (
        <>
            <h1> BreakingBad Quotes </h1>
            <hr />
            {
                loading
                ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                ) : (
                    <blockquote className="blockquote text-end">
                        <p className='mb-3'> {quote} </p>
                        <footer className='blockquote-footer'> {author} </footer>
                    </blockquote>
                )
            }
            <button 
                className='btn btn-primary'
                onClick={increment}
            >
                Siguiente qoute
            </button>
        </>
    );
};
