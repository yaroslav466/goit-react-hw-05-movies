import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ movies, title }) => {
    const location = useLocation();
    
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {movies.map(movie => {
                    return (
                        <li key={movie.id}>
                            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                                <img src="{
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                      : 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'
                  }" alt="{movie.title}" />
                                <h3>{movie.title}</h3>
                                {movie.release_date && (
                                    <h4>{movie.release_date}</h4>
                                )}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );

};
export default MoviesList;