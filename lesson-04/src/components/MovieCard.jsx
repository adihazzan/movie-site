import { useState } from "react";
import "./MovieCard.css";

function MovieCard({ title, year, genre, rating, poster, available, duration }) {
  const [showDetails, setShowDetails] = useState(false);
  const [watched, setWatched] = useState(false);

  return (
    <article className={`movie-card ${watched ? "movie-card--watched" : ""}`}>
      <div className="movie-card__poster">
        <img src={poster} alt={title} />
        {available && <span className="movie-card__badge">זמין לצפייה</span>}
      </div>

      <div className="movie-card__body">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__meta">
          {year} · {duration} דק׳
        </p>

        <button
          type="button"
          className="movie-card__watched-btn"
          onClick={() => setWatched((prev) => !prev)}
        >
          צפיתי
        </button>

        <button
          type="button"
          className="movie-card__toggle"
          onClick={() => setShowDetails((prev) => !prev)}
        >
          פרטים
        </button>

        {showDetails && (
          <div className="movie-card__footer">
            <span className="movie-card__genre">{genre}</span>
            <span className="movie-card__rating">★ {rating}</span>
          </div>
        )}
      </div>
    </article>
  );
}

export default MovieCard;