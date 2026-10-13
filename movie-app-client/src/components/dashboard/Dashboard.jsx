import { useContext, useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import MovieForm from '../movieForm/MovieForm.jsx';
import Movies from '../movies/Movies.jsx';
import MovieDetails from '../movieDetails/MovieDetails.jsx';
import { AuthenticationContext } from '../services/auth/auth.context.jsx';

const Dashboard = () => {
  const { token, handleUserLogout } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);

  const handleMovieAdd = (movieData) => {
    setMovies((prevMovies) => [movieData, ...prevMovies]);
    navigate("/catalog", { replace: true });
  }

  const handleMovieDelete = (id) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  }

  useEffect(() => {
    fetch("http://localhost:3000/movies", {
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(err => console.log(err))
  }, [token])


  const handleLogout = () => {
    handleUserLogout();
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
        <Route path="add-movie" element={<MovieForm onMovieAdd={handleMovieAdd} />} />
        <Route path=":id" element={<MovieDetails />} />
      </Routes>
    </Container>
  );
};

export default Dashboard;
