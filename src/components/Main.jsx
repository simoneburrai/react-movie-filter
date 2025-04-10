import { useEffect } from "react";
import { useState } from "react";

function Main({ movies }) {

    const [selectGenre, setSelectGenre] = useState("");
    const [allMovies, setAllMovies] = useState(movies);
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [inputSearch, setInputSearch] = useState("");
    const [createdTitle, setCreatedTitle] = useState("");
    const [createdGenre, setCreatedGenre] = useState("");

    const onCreatingMovie = (e) => {
        e.preventDefault();
        const newMovie = {
            "title": createdTitle,
            "genre": createdGenre
        }
        setAllMovies([...allMovies, newMovie]);
    }
    const onSubmitSearch = (e => {
        e.preventDefault();
        let searchedMovies = filteredMovies;
        if (inputSearch != "") {
            searchedMovies = (filteredMovies.filter(movie => movie.title.includes(inputSearch)));
        }
        console.log(searchedMovies);
        setFilteredMovies(searchedMovies);
    })

    useEffect(() => {
        let selectedMovies = allMovies;
        if (selectGenre !== "") {
            selectedMovies = allMovies.filter(movie => movie.genre === selectGenre);
        }
        setFilteredMovies(selectedMovies);
    }, [selectGenre, allMovies])


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
        <form onSubmit={onCreatingMovie} className="add-movie">
            <label>Insert Title</label>
            <input value={createdTitle} onChange={(e) => setCreatedTitle(e.target.value)} />
            <label>Insert Genre</label>
            <input value={createdGenre} onChange={(e) => setCreatedGenre(e.target.value)} />
            <button>Aggiungi</button>
        </form>
    </main>
}

export default Main;