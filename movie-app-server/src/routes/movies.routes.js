import { Router } from 'express';
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from '../services/movie.service.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

router.get('/movies', verifyToken, getAllMovies);

router.get('/movies/:id', verifyToken, getMovieById);

router.post('/movies', createMovie);

router.put('/movies/:id', updateMovie);

router.delete('/movies/:id', deleteMovie);

export default router;