import { useLoaderData } from "react-router-dom";

function MovieDetails() {
    const movieData = useLoaderData();
    console.log(movieData);
   if (!movieData || movieData.Response === "False") {
        return <h2>Movie not found!</h2>;
    }

    return (
        <>
            <h1>{movieData.Title}</h1>
            <img src={movieData.Poster} alt={movieData.Title} />
            <p>{movieData.Plot}</p>
        </>
    );
}

export default MovieDetails;