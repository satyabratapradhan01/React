import { useState, useEffect } from "react";
import "./Pokemon.css";

export const HowNotToFeatchApi = () => {
  const [apiData, setApiData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = useState("")

  const API = "https://pokeapi.co/api/v2/pokemon/squirtle";

  const fetchPokemon = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }
  useEffect(() => {
    fetchPokemon();
  }, []);


  if (Loading)
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    )

  if (error)
    return (
      <div>
        <h1>Error: {error.message}</h1>

      </div>
    )

  if (apiData) {
    return (
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img src={apiData.sprites.other.dream_world.front_default}
                alt={apiData.name}
                className="pokemon-image" />
            </figure>
            <h1>{apiData.name}</h1>
          </li>
        </ul>
      </section>
    );
  }
};
