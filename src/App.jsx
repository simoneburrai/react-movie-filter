import Header from "./components/Header"
import Main from "./components/Main"
import movies from "./data/movie"


function App() {
  return <>
    <Header />
    <Main movies={movies} />
  </>
}

export default App
