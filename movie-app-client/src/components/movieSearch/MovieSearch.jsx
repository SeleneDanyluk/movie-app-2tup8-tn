import { Form } from "react-bootstrap";

// Ejercicio de clase (U2.2): buscador de peliculas.
// Escucha el cambio del input y "sube" el valor a App mediante onSearch,
// donde se guarda en un estado que filtra la lista de peliculas.
const MovieSearch = ({ onSearch }) => {
    return (
        <Form.Group className="mb-4 w-50" controlId="searchMovie">
            <Form.Control
                type="text"
                placeholder="Buscar película..."
                onChange={onSearch}
            />
        </Form.Group>
    );
};

export default MovieSearch;
