import '../css/Favourites.css'
import { useMovieContext } from '../contexts/MovieContexts'
import MovieCard from '../components/MovieCard';

function Favourites() {

  const { favourites } = useMovieContext();

  if (!favourites || favourites.length === 0) {
    return (
    <div className="favourites-empty">
      <h2>No Favourite Movies Yet</h2>
    </div>
  )
      
  }

  return (
      <div className='favourites'>
        <h2>Your Favourite Movies</h2> 
        <div className="movies-grid">
          {favourites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    )
  
}

export default Favourites;