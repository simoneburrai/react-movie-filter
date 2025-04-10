import { useEffect } from "react";
import { useState } from "react";

function Main({ movies }) {

    const [selectCategory, setSelectCategory] = useState("");


    useEffect(() => {
        const selectedMovies = movies;
        if (selectCategory !== "") {

        }


    }, [selectCategory])

    return <main>
        <div className="select-container">
            <select onChange={(e) => setSelectCategory(e.target.value)}>
                <option value="">Categories</option>
                <option value={selectCategory}>Fantascienza</option>
                <option value={selectCategory}>Thriller</option>
                <option value={selectCategory}>Azione</option>
                <option value={selectCategory}>Romantico</option>
            </select>
        </div>
        <div className="movies-container">
            {movies.map((movie, i) => {
                return <div key={i} className="movie">
                    <h2>{movie.title}</h2>
                    <h3>{movie.genre}</h3>
                </div>
            })}
        </div>
    </main>
}

export default Main;