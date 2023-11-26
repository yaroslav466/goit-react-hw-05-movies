import Loader from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { fetchTrendingMovies } from 'js/api';
import React from 'react';
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const newFetchTrendingMovies = async () => {
            setLoading(true);
            try {
                const resp = await fetchTrendingMovies();

                if (resp.length === 0) {
                    console.log('нуль результатів або помилка');
                    return;
                }
                setMovies([...resp]);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        newFetchTrendingMovies();
    }, []);
    
    return (
        <>
            {loading && <Loader />}
            {!loading && movies && movies.length > 0 && (
                <MovieList movies={movies} title={'Trending today:'} />
            )}
        </>
    );
};
    export default HomePage;