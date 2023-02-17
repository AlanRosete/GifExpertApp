import React, { useState } from "react";
import AddCategory from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(["Dragon Ball"])

    /*

    const handleAdd = () => {
       setcategories([...categories, "Hola Alan"])
    }

    */
 

    return (
    <>
     <h2 className="hola"> Buscador De Gifs Por API KEYS !!</h2>
     <AddCategory setCategories={setCategories}/> 

    <ol className="ol">
        <ul className="ul">

            {
            categories.map(category => (
                <GifGrid
                key={category}
                category={category}/>
            ))
            }
        </ul>
    </ol>

    </>
    )
}
