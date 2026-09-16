import { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ConfirmModal from '../ui/confirmModal/ConfirmModal.jsx';

const MovieItem = ({ id, title, imageUrl, rating, duration, summary, available, onMovieDelete }) => {

    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

    const handleSelect = () => {
        navigate(`${id}`, {
            state: {
                movie: { id, title, imageUrl, rating, duration, summary, available }
            }
        });
    }

    const handleDeleteClick = () => {
        setShowModal(true);
    }

    const handleCancel = () => {
        setShowModal(false);
    }

    const handleConfirmDelete = () => {
        setShowModal(false);
        onMovieDelete(id);
    }

    return (
        <>
            <Card bg="dark" text="light" className="h-100 shadow-lg border-secondary movie-card">
                <Card.Img variant="top" src={imageUrl} className="object-fit-cover movie-card-img" />
                <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                        <Card.Title className="mb-0 movie-card-title">{title}</Card.Title>
                        <Badge bg={available ? "success" : "danger"} className="text-nowrap">
                            {available ? "Disponible" : "No disponible"}
                        </Badge>
                    </div>
                    <Card.Subtitle className="mb-2 text-warning">⭐ {rating} puntos · {duration} min</Card.Subtitle>
                    <Card.Text className="flex-grow-1 text-light-emphasis movie-card-summary">{summary}</Card.Text>
                    <div className="mt-auto d-grid gap-2">
                        <Button variant="outline-light" onClick={handleSelect}>Seleccionar película</Button>
                        <Button variant="outline-danger" onClick={handleDeleteClick}>Eliminar película</Button>
                    </div>
                </Card.Body>
            </Card>

            <ConfirmModal
                show={showModal}
                onCancel={handleCancel}
                onConfirm={handleConfirmDelete}
                movieTitle={title}
            />
        </>
    )
    
}

export default MovieItem
