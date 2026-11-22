import { useState } from "react";
import Header from "./components/Header.jsx";
import MovieList from "./components/MovieList.jsx";
import Footer from "./components/Footer.jsx";
import { movies } from "./data/movies.js";

function App() {
  const [sortByRating, setSortByRating] = useState(false);

  const animationMovies = movies.filter((movie) => movie.genre === "Animation");
  const shortMovies = movies.filter((movie) => movie.duration <= 100);

  const catalogMovies = sortByRating
    ? [...movies].sort((a, b) => b.rating - a.rating)
    : movies;

  return (
    <>
      <Header movieCount={movies.length} />
      <main className="container">
        <div className="toolbar">
          <button
            type="button"
            className={sortByRating ? "is-active" : ""}
            onClick={() => setSortByRating((prev) => !prev)}
          >
            מיון לפי דירוג
          </button>
        </div>

        <MovieList
          title={`כל הסרטים (${catalogMovies.length})`}
          movies={catalogMovies}
        />
        <MovieList title="אנימציה" movies={animationMovies} />
        <MovieList title="קצרים — עד 100 דקות" movies={shortMovies} />
      </main>
      <Footer />
    </>
  );
}

export default App;