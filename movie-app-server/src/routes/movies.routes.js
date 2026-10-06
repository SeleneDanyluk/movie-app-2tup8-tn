import { Router} from 'express';
import Movie from '../models/Movie.js';

const router = Router();

router.get('/movies', async (req, res) => {
    const movies = await Movie.findAll();
    res.json(movies);
});

router.get('/movies/:id', async (req, res) => {
    const movieId = req.params.id;
    const movie = await Movie.findByPk(movieId);
    res.json(movie);
});

router.post('/movies', (req, res) => {
    res.send('Movie created successfully');
});

router.put('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    res.send(`Movie with ID: ${movieId} updated successfully`);
});

router.delete('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    res.send(`Movie with ID: ${movieId} deleted successfully`);
});

export default router;