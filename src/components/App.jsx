import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MoviesDetails = lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
      <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movies" element={<MoviesPage />} />

          <Route path="/movies/:movieId/*" element={<MoviesDetails />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
