import { useLoaderData } from "react-router-dom";
import Card from "../components/UI/Card";
import "../components/UI/Card.css"

function Movie() {
    const movieData = useLoaderData();
    console.log(movieData)
    return ( 
        <ul className="card-grid">
            {movieData && movieData.Search.map((curMovie) => {
                return<Card key={curMovie.imdbID}
                curMovie={curMovie}/>
            })}
        </ul>
     );
}

export default Movie;