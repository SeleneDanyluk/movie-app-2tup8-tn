import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const MovieItem = ({ title, image, rating, duration, summary, available }) => {
    const [newTitle, setNewTitle] = useState(title);

    const handleChangeTitle = () => {
        setNewTitle("Título actualizado.");
    }

    return (
        <Card bg="dark" text="light" className="h-100 shadow-lg border-secondary movie-card">
            <Card.Img variant="top" src={image} className="object-fit-cover movie-card-img" />
            <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                    <Card.Title className="mb-0 movie-card-title">{newTitle}</Card.Title>
                    <Badge bg={available ? "success" : "danger"} className="text-nowrap">
                        {available ? "Disponible" : "No disponible"}
                    </Badge>
                </div>
                <Card.Subtitle className="mb-2 text-warning">⭐ {rating} puntos · {duration} min</Card.Subtitle>
                <Card.Text className="flex-grow-1 text-light-emphasis movie-card-summary">{summary}</Card.Text>
                <Button variant="outline-light" onClick={handleChangeTitle} className="mt-auto">Cambiar título!</Button>
            </Card.Body>
        </Card>
    )
}

export default MovieItem