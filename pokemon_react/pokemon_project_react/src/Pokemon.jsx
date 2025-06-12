import { useEffect, useState } from "react";
import "./index.css";
import { PokemonCard } from "./PokemonCard";

export const Pokemon = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoding] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");


    const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

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
            setPokemon(detailedResponses);
            setLoding(false);
        } catch (error) {
            console.log(error);
            setLoding(false);
            setError(error);
        }
    }

    useEffect(()=> {
        fetchPokemon();
    }, []);

    //search functionality

    if(loading){
        return(
            <div>
                <h1>Loading....</h1>
            </div>
        )
    }

    if(error){
        return(
            <div>
               <h1>Error: {error.message}</h1>
            </div>
        )
    }


    return (
        <>
         <section className="container">
            <header>
                <h1>Lets Catch Pokemon</h1>
            </header>
            <div className="pokemon-search">
    
                <input 
                type="text" 
                placeholder="search Pookemon" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div>
                <ul className="cards">
                    {pokemon.map((curPokemon) => {
                        return (
                        <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
                    );
                    })}
                </ul>
            </div>
         </section>
        </>
    )
}