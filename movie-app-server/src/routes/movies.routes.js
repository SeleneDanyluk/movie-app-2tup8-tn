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

router.post('/movies', async (req, res) => {
    const { title, duration, rating, imageUrl, summary, available } = req.body;

    const movie = await Movie.create({
        title,
        duration,
        rating,
        imageUrl,
        summary,
        available
    });

    res.json(movie);
});

router.put('/movies/:id', async (req, res) => {
    const movieId = req.params.id;
    const updatedMovie = req.body;

    const movie = await Movie.findByPk(movieId);

    if (!movie) {
        return res.status(404).json({ message: 'Pelicula no encontrada' });
    }

    await movie.update(updatedMovie);

    res.json(movie);
});

router.delete('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    res.send(`Movie with ID: ${movieId} deleted successfully`);
});

export default router;