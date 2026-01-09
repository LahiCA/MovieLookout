import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/MovieDetails.css";

const API_KEY = "0ce07b8b60268785a843751131e46ac0";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <div className="movie-details-loading">Loading</div>;

  return (
    <div className="movie-details">
      {/* Poster Image */}
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      
      {/* Content Section */}
      <div className="movie-details-content">
        {/* Title */}
        <h1>{movie.title}</h1>
        
        {/* Overview */}
        <p className="overview">{movie.overview}</p>
        
        {/* Info Grid */}
        <div className="movie-details-info">
          {/* Rating */}
          <div className="info-card rating">
            <p className="info-card-label">Rating</p>
            <p className="info-card-value">
              ⭐ {movie.vote_average.toFixed(1)}
            </p>
          </div>
          
          {/* Release Date */}
          <div className="info-card">
            <p className="info-card-label">Release Date</p>
            <p className="info-card-value">
              📅 {new Date(movie.release_date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          
          {/* Runtime */}
          <div className="info-card">
            <p className="info-card-label">Runtime</p>
            <p className="info-card-value">
              ⏳ {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
            </p>
          </div>
        </div>
        
        {/* Genres */}
        <div>
          <p className="info-card-label" style={{ marginBottom: '1rem' }}>Genres</p>
          <div className="genres-list">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre-tag">
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

/* import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/MovieDetails.css";

const API_KEY = "0ce07b8b60268785a843751131e46ac0";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>⭐ Rating: {movie.vote_average}</p>
      <p>📅 Release Date: {movie.release_date}</p>
      <p>🎬 Genres: {movie.genres.map((g) => g.name).join(", ")}</p>
      <p>⏳ Runtime: {movie.runtime} minutes</p>
      
    </div>
  );
}

export default MovieDetails;
 */