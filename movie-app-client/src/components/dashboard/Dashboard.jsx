import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NewMovie from '../newMovie/NewMovie.jsx';
import Movies from '../movies/Movies.jsx';
import MovieDetails from '../movieDetails/MovieDetails.jsx';

const Dashboard = ({ onLogout }) => {

  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  const handleMovieAdd = (movieData) => {
    const data = {
      ...movieData,
      id: Math.random()
    }

    setMovies((prevMovies) => [data, ...prevMovies]);
    navigate("/catalog", { replace: true });
  }

  const handleMovieDelete = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  }

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(err => console.log(err))
  }, [])


  const handleLogout = () => {
    onLogout();
    navigate("/login", { replace: true });
  }

  const handleNavigateAddMovie = () => {
    navigate("/catalog/add-movie", { replace: true });
  }

  return (
    <Container>
      <div className="d-flex justify-content-end gap-2 pt-2">
        <Button variant="success" onClick={handleNavigateAddMovie}>
          Agregar película
        </Button>
        <Button variant="primary" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </div>

      <h1 className="text-light text-center">LAS PELIS DE LA 2TUP8</h1>
      <h3 className="text-light-emphasis text-center mb-5">Bienvenidos/as</h3>

      <Routes>
        <Route index element={<Movies movies={movies} onMovieDelete={handleMovieDelete} />} />
        <Route path="add-movie" element={<NewMovie onMovieAdd={handleMovieAdd} />} />
        <Route path=":id" element={<MovieDetails />} />
      </Routes>
    </Container>
  );
};

export default Dashboard;
