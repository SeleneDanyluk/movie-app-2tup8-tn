import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const NewMovie = ({ onMovieAdd }) => {

    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState(0);
    const [imageUrl, setImageUrl] = useState("");
    const [rating, setRating] = useState(0);
    const [summary, setSummary] = useState("");
    const [available, setAvailable] = useState(false);

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
            duration,
            rating,
            imageUrl,
            summary,
            available
        }

        onMovieAdd(data);

        setTitle("");
        setAvailable(false);
        setDuration(0);
        setRating(0);
        setSummary("");
        setImageUrl("");
    };

    return (
        <Card className="m-4 w-50 shadow-lg border-secondary" bg="dark" text="light">
            <Card.Body>
                <Card.Title className="mb-3">Agregar película</Card.Title>
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
                        <Col md={4} className="d-flex flex-column justify-content-end align-items-end">
                            <Form.Check
                                type="switch"
                                id="available"
                                className="mb-3"
                                label="¿Disponible?"
                                onChange={handleChangeAvailable}
                            />
                            <Button variant="success" type="submit">
                                Agregar película
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default NewMovie;
