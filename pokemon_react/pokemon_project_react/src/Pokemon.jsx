import { useEffect, useState } from "react";
import "./index.css";

export const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);

    const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            
            const detailedPokemonData = data.results.map( async (curPokemon) => {
                const res = await fetch(curPokemon.url);
                const data = await res.json();
                return data;                                                          
            })
            const detailedResponses = await Promise.all(detailedPokemonData);
            console.log(detailedResponses);
            setPokemon(detailedResponses)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        fetchPokemon();
    }, []);


    return (
        <>
         <h1>Hello Pokemon</h1>
        </>
    )
}