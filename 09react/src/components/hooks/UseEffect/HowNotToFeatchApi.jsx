import { useState } from "react";



export const HowNotToFeatchApi = () => {
    const [apiData, setApiData] = useState([]);

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";

    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((res) => res.json())
    .then((data) =>{
        setApiData(data);
    })
    .catch((error) => console.log(error));

    return(
        <>
        <ul>
            data:
            {apiData.map((curData) => {
                return <li key={curData.id}> {curData.title} </li>
            })}
        </ul>
        </>
    )
}