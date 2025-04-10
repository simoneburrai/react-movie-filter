import { useEffect } from "react";
import { useState } from "react";

function Main({ movies }) {

    const [selectGenre, setSelectGenre] = useState("");
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [inputSearch, setInputSearch] = useState("");

    const onSubmitSearch = (e => {
        e.preventDefault();
        const searchedMovies = filteredMovies.filter(movie => movie.title.includes(inputSearch));
        setFilteredMovies(searchedMovies);
        console.log(searchedMovies);
    })

    useEffect(() => {
        let selectedMovies = movies;
        if (selectGenre !== "") {
            selectedMovies = movies.filter(movie => movie.genre === selectGenre);
        }
        setFilteredMovies(selectedMovies);

    }, [selectGenre, filteredMovies])


    return <main>
        <form onSubmit={onSubmitSearch} className="form-search">
            <input onChange={(e) => setInputSearch(e.target.value)} type="text" />
            <button>Search</button>
        </form>
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