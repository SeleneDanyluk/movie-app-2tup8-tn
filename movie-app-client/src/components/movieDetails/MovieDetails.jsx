import { useLocation, useNavigate } from "react-router";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const MovieDetails = () => {

    const navigate = useNavigate();
    const { state } = useLocation();
    const movie = state?.movie;

    const goBackHandler = () => {
        navigate("/catalog");
    };

    if (!movie) {
        return (
            <div className="text-light text-center mt-4">
                <p>No se encontró información de la película seleccionada.</p>
                <Button className="mt-3" onClick={goBackHandler}>
                    Volver a la página principal
                </Button>
            </div>
        );
    }

    const { title, imageUrl, rating, duration, summary, available } = movie;

    return (
        <Card
            bg="dark"
            text="light"
            className="mx-auto my-4 shadow-lg border-secondary"
            style={{ maxWidth: "480px" }}
        >
            <Card.Img variant="top" src={imageUrl} className="object-fit-cover movie-card-img" />
            <Card.Body>
                <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
                    <Card.Title className="mb-0">{title}</Card.Title>
                    <Badge bg={available ? "success" : "danger"} className="text-nowrap">
                        {available ? "Disponible" : "No disponible"}
                    </Badge>
                </div>
                <Card.Subtitle className="mb-3 text-warning">
                    ⭐ {rating} puntos · {duration} min
                </Card.Subtitle>
                <Card.Text className="text-light-emphasis">
                    <strong>Sinopsis:</strong> {summary}
                </Card.Text>
                <Button onClick={goBackHandler}>Volver a la página principal</Button>
            </Card.Body>
        </Card>
    );
};

export default MovieDetails;
