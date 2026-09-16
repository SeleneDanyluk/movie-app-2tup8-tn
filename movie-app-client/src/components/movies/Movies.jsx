import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieItem from '../movieItem/MovieItem.jsx';
import MovieSearch from '../movieSearch/MovieSearch.jsx';

const Movies = ({ movies, onMovieDelete }) => {

    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <MovieSearch onSearch={handleSearch} />

            {filteredMovies.length === 0
                ? <p className="text-light-emphasis">No hay películas que coincidan con la búsqueda.</p>
                : <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
                    {filteredMovies.map((movie) =>
                        <Col key={movie.id}>
                            <MovieItem
                                id={movie.id}
                                title={movie.title}
                                imageUrl={movie.imageUrl}
                                rating={movie.rating}
                                duration={movie.duration}
                                summary={movie.summary}
                                available={movie.available}
                                onMovieDelete={onMovieDelete}
                            />
                        </Col>
                    )}
                </Row>
            }
        </>
    )
}

export default Movies
