import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categorys, setCategorys] = useState(['evangelion']);

    return (
    <>
        <h1> Gift Expert App </h1>
        <AddCategory setCategorys = {setCategorys} />
        <hr />
        {
            categorys.map( category => {
                return(
                    <GifGrid 
                        key={ category }
                        category={ category }
                    /> 
                )
            })
        }
    </>
    )
};

