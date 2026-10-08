import { Router } from 'express';
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from '../services/movie.service.js';

const router = Router();

router.get('/movies', getAllMovies);

router.get('/movies/:id', getMovieById);

router.post('/movies', createMovie);

router.put('/movies/:id', updateMovie);

router.delete('/movies/:id', deleteMovie);

export default router;