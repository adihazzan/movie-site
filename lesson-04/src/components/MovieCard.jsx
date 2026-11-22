import { useState } from "react";
import "./MovieCard.css";

function MovieCard({ title, year, duration, genre, rating, poster, available }) {
  const [liked, setLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [watched, setWatched] = useState(false);

  function handleLike() {
    setLiked((prev) => !prev);
  }

  function handleRatingClick(star) {
  setUserRating((prev) => (prev === star ? 0 : star));
}


  const [userRating, setUserRating] = useState(0); // <-- right here
  return (
    <article className={`movie-card ${watched ? "movie-card--watched" : ""}`}>
      <div className="movie-card__poster">
        <img src={poster} alt={title} />
        {available && <span className="movie-card__badge">זמין לצפייה</span>}
        <button
          type="button"
          className="movie-card__like"
          onClick={handleLike}
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>

      <div className="movie-card__body">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__meta">
          {year} · {duration} דק׳
        </p>
        <div className="movie-card__user-rating">
  <span>הדירוג שלי:</span>
  {[1, 2, 3, 4, 5].map((star) => (
    <button
      key={star}
      type="button"
      className="movie-card__star"
      onClick={() => handleRatingClick(star)}
      aria-label={`דרג ${star} מתוך 5`}
    >
      {star <= userRating ? "★" : "☆"}
    </button>
  ))}
</div>

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