import { Button, Modal } from "react-bootstrap";

const ConfirmModal = ({ show, onCancel, onConfirm, movieTitle }) => {
    return (
        <Modal show={show} onHide={onCancel} centered>
            <Modal.Header closeButton>
                <Modal.Title>Eliminar película</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                ¿Deseás realmente eliminar <strong>"{movieTitle}"</strong> de la lista?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancel}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Sí, deseo eliminarlo
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmModal;
