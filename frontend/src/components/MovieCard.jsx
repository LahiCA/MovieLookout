import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContexts';
 
function MovieCard({ movie }) {
  const { isFavourite, addToFavourites, removeFromFavourites } = useMovieContext();
  const favourite = isFavourite(movie.id);
    
  function onFavouriteClick(e) {
    e.preventDefault();
    if (favourite) removeFromFavourites(movie.id);
    else addToFavourites(movie);
  }

    const posterUrl = movie?.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null;
    const year = movie?.release_date ? movie.release_date.split('-')[0] : '';

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {posterUrl ? (
          <img src={posterUrl} alt={movie.title}/>
        ) : (
          <div className="no-poster">No image</div>
        )}
        <div className="movie-overlay">
            <button className={`favourite-btn ${favourite ? "active" : ""}`} onClick={onFavouriteClick}> ♥</button>
        </div>

    </div>
    <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="release_year">{year}</p>
    </div>
    </div>
  );
}
export default MovieCard;