import { Router } from 'express';
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from '../services/movie.service.js';
import { verifyToken } from '../middleware/auth.js';

const router = Router();

router.get('/movies', verifyToken, getAllMovies);

router.get('/movies/:id', verifyToken, getMovieById);

router.post('/movies', verifyToken, createMovie);

router.put('/movies/:id', verifyToken, updateMovie);

router.delete('/movies/:id', verifyToken, deleteMovie);

export default router;