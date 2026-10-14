import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useContext } from "react";
import { AuthenticationContext } from "../services/auth/auth.context";
import { errorToast, successToast } from "../shared/toast/toast";

const MovieForm = ({ onMovieAdd }) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { movie } = state || {};
    const isEditing = movie !== undefined ? true : false;

    const { token } = useContext(AuthenticationContext);

    const [title, setTitle] = useState(movie?.title);
    const [duration, setDuration] = useState(movie?.duration);
    const [imageUrl, setImageUrl] = useState(movie?.imageUrl);
    const [rating, setRating] = useState(movie?.rating);
    const [summary, setSummary] = useState(movie?.summary);
    const [available, setAvailable] = useState(movie?.available ?? false);

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeDuration = (e) => {
        setDuration(e.target.value);
    };

    const handleChangeRating = (e) => {
        setRating(e.target.value);
    };

    const handleChangeImageUrl = (e) => {
        setImageUrl(e.target.value);
    };

    const handleChangeSummary = (e) => {
        setSummary(e.target.value);
    };

    const handleChangeAvailable = (e) => {
        setAvailable(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title,
            duration: parseInt(duration, 10),
            rating: parseFloat(rating),
            imageUrl,
            summary,
            available
        }

        const url = isEditing ? `http://localhost:3000/movies/${movie.id}` : "http://localhost:3000/movies";

        fetch(url, {
            method: isEditing ? "PUT" : "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok)
                    return res.json().then(data => {
                        errorToast(data.message);
                        throw new Error(data.message);
                    });

                return res.json();
            })
            .then(res => {
                onMovieAdd(res.data)
                successToast(res.message)
                setTitle("");
                setAvailable(false);
                setDuration(0);
                setRating(0);
                setSummary("");
                setImageUrl("");
            })
            .catch(err => console.log(err))
    };

    return (
        <Card className="mx-auto my-4 shadow-lg border-secondary" bg="dark" text="light" style={{ maxWidth: "720px" }}>
            <Card.Body>
                <Card.Title className="mb-3">{isEditing ? "Editar Pelicula" : "Agregar película"}</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col md={8}>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Título</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar título"
                                    onChange={handleChangeTitle}
                                    value={title}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group className="mb-3" controlId="duration">
                                <Form.Label>Duración (min)</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Minutos"
                                    min={1}
                                    onChange={handleChangeDuration}
                                    value={duration}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="rating">
                                <Form.Label>Puntuación</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingresar puntuación"
                                    max={10}
                                    min={0}
                                    step={0.1}
                                    onChange={handleChangeRating}
                                    value={rating}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="imageUrl">
                                <Form.Label>URL de imagen</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingresar url de imagen"
                                    onChange={handleChangeImageUrl}
                                    value={imageUrl}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="summary">
                                <Form.Label>Resumen</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder="Ingresar resumen"
                                    onChange={handleChangeSummary}
                                    value={summary}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={5} className="d-flex flex-column justify-content-end align-items-end">
                            <Form.Check
                                type="switch"
                                id="available"
                                className="mb-3"
                                label="¿Disponible?"
                                onChange={handleChangeAvailable}
                                checked={available}
                            />
                            <div className="d-flex gap-2">
                                <Button variant="secondary" type="button" onClick={() => navigate("/catalog")}>
                                    Volver
                                </Button>
                                <Button variant="success" type="submit">
                                    {isEditing ? "Guardar" : "Agregar"}
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default MovieForm;
