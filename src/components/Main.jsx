import { useEffect } from "react";
import { useState } from "react";

function Main({ movies }) {

    const [selectGenre, setSelectGenre] = useState("");
    const [allMovies, setAllMovies] = useState(movies);
    const [filteredMovies, setFilteredMovies] = useState(allMovies);
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

    useEffect(() => {
        let selectedMovies = allMovies;
        if (inputSearch != "") {
            selectedMovies = (allMovies.filter(movie => movie.title.includes(inputSearch)));
        }
        if (selectGenre !== "") {
            selectedMovies = selectedMovies.filter(movie => movie.genre === selectGenre);
        }
        setFilteredMovies(selectedMovies);
    }, [selectGenre, allMovies, inputSearch])


    return <main>
        <form className="form-search">
            <input onChange={(e) => setInputSearch(e.target.value)} type="text" />
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