import Loader from 'components/Loader/Loader';
import { fetchMovieCast } from 'js/api';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();

    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? `/movies/${movieId}`);


    useEffect(() => {
        const fetchSelectMovieCast = async () => {
            setIsLoading(true);
            try {
                const resp = await fetchMovieCast(movieId);

                setCast([...resp]);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSelectMovieCast();
    }, [movieId]);
    
return (
<>
    <h2>
        Cast:
        <Link to={backLinkRef.current}>Hide</Link>
    </h2>
    {isLoading && <Loader />}
    {cast.length > 0 && (
        <ul>
            {cast.map(actor => {
                return (
                    <li key={actor.id}>
                        <img src={
                            actor.profile_path
                                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                                : `https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png`
                        }
                            alt={actor.name}
                        />

                        <h3>{actor.name}</h3>
                        <h3>{actor.character}</h3>
                    </li>
                );
            })}
        </ul>
    )}
</>
);   
};

export default Cast;