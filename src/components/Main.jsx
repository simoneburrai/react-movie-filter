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
            const lowerCaseSearch = inputSearch.toLowerCase()
            selectedMovies = (allMovies.filter(movie => {
                const movieTitle = movie.title;
                const lowerCaseTitle = movieTitle.toLowerCase();
                if (lowerCaseTitle.includes(lowerCaseSearch)) {
                    return movie;
                }
            }));
        }
        if (selectGenre !== "") {
            selectedMovies = selectedMovies.filter(movie => movie.genre === selectGenre);
        }
        setFilteredMovies(selectedMovies);
    }, [selectGenre, allMovies, inputSearch])


    return <main>
        <div className="inputs-container">
            <form className="form-search">
                <input placeholder="Ricerca per Titolo" onChange={(e) => setInputSearch(e.target.value)} type="text" />
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
            <h2>Create a new Movie</h2>
            <div className="create-input-container">
                <label>Insert Title</label>
                <input value={createdTitle} onChange={(e) => setCreatedTitle(e.target.value)} />
            </div>
            <div className="create-input-container">
                <label>Insert Genre</label>
                <input value={createdGenre} onChange={(e) => setCreatedGenre(e.target.value)} />
            </div>
            <button>Aggiungi</button>
        </form>
    </main>
}

export default Main;