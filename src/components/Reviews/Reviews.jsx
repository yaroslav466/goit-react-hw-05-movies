import Loader from 'components/Loader/Loader';
import { fetchMovieReviews } from 'js/api';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { movieId } = useParams();
    
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from ?? `/movies/${movieId}`);
    
    useEffect(() => {
        const fetchSelectMovieReviews = async () => {
            setIsLoading(true);
            try {
                const resp = await fetchMovieReviews(movieId);

                setReviews([...resp]);
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSelectMovieReviews();
    }, [movieId]);
    
    return (
        <>
            <h2>
                <Link to={backLinkRef.current}>Hide</Link>
            </h2>
            {isLoading && <Loader />}
            {!isLoading && reviews.length === 0 && <h3>There are no reviews.</h3>}
            {reviews.length > 0 && (
                <ul>
                    {reviews.map(review => {
                        return (
                            <li key={review.id}>
                                <h3>@ {review.author}:</h3>
                                <p>{review.content}</p>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};
export default Reviews;