import { useEffect } from "react";
import { useState } from "react";

function Main({ movies }) {

    const [selectGenre, setSelectGenre] = useState("");
    const [filteredMovies, setFilteredMovies] = useState(movies);

    useEffect(() => {
        console.log("montato");
        let selectedMovies = movies;
        if (selectGenre !== "") {
            selectedMovies = movies.filter(movie => movie.genre === selectGenre);
        }
        setFilteredMovies(selectedMovies);

    }, [selectGenre])

    return <main>
        <div className="select-container">
            <select onChange={(e) => setSelectGenre(e.target.value)}>
                <option value="">Categories</option>
                <option >Fantascienza</option>
                <option >Thriller</option>
                <option >Azione</option>
                <option>Romantico</option>
            </select>
        </div>
        <div className="movies-container">
            {filteredMovies.map((movie, i) => {
                return <div key={i} className="movie">
                    <h2>{movie.title}</h2>
                    <h3>{movie.genre}</h3>
                </div>
            })}
        </div>
    </main>
}

export default Main;