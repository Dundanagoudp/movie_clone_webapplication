import { useEffect, useState } from "react";
import { Movies } from "../api/MovieApi";

export const MovieData = () => {
    const [movies, setMovies] = useState([]);  

    const MovieDetails = async () => {
        try {
            const res = await Movies();
            setMovies(res.data.Search);  
        } catch (error) {
            console.log(error);  
        }        
    };

    useEffect(() => {
        MovieDetails();
    }, []);  

    return (
        <div className="grid-container">
            {movies.map((movie) => (
                <div className="movie-card" key={movie.imdbID}>
                    <h2>{movie.Title}</h2>
                    <img src={movie.Poster} alt={movie.Title} />
                    <p>Year: {movie.Year}</p>
                </div>
            ))}
        </div>
    );
};
