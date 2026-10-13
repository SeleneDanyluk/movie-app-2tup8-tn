import Movie from '../models/movie/Movie.js';

export const getAllMovies = async (req, res) => {
    const movies = await Movie.findAll();
    res.json(movies);
};

export const getMovieById = async (req, res) => {
    const movieId = req.params.id;
    const movie = await Movie.findByPk(movieId);
    res.json(movie);
};

export const createMovie = async (req, res) => {
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
};

export const updateMovie = async (req, res) => {
    const movieId = req.params.id;
    const updatedMovie = req.body;

    const movie = await Movie.findByPk(movieId);

    if (!movie) {
        return res.status(404).json({ message: 'Pelicula no encontrada' });
    }

    await movie.update(updatedMovie);

    res.json(movie);
};

export const deleteMovie = async (req, res) => {
    const movieId = req.params.id;
    const movie = await Movie.findByPk(movieId);

    if (!movie) {
        return res.status(404).json({ message: `Pelicula con id: ${movieId} no encontrada.` });
    }

    await movie.destroy();

    res.status(200).json({ message: `Pelicula con id: ${movieId} eliminada.` });
};
