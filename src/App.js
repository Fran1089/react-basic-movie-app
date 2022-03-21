import {useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCart from "./movie_cart.jsx";

//eff53899


const API_URL = 'http://www.omdbapi.com?apiKey=eff53899'

const App = () => {

    const [movies, setMovies] = useState([]);  
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        searchMovies('Endgame');
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    const movie1 = {
        "Title": "Avengers: Endgame",
        "Year": "2019",
        "imdbID": "tt4154796",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
    }

    return(
        <div className="app">
            <h1>Movieland</h1>

            <div className="search">
                <input
                    placeholder="Buscar pelicula"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCart movie={movie} />
                        ))}
                    </div>
                ) : (
                    
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

        </div>
    );
}

export default App; 