import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        password: false,
    });

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
        setErrors({ ...errors, name: false });
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setErrors({ ...errors, email: false });
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setErrors({ ...errors, password: false });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!nameRef.current.value.length) {
            setErrors({ ...errors, name: true });
            alert("¡Nombre vacío!");
            nameRef.current.focus();
            return;
        }

        if (!emailRef.current.value.length) {
            setErrors({ ...errors, email: true });
            alert("¡Email vacío!");
            emailRef.current.focus();
            return;
        }

        if (!password.length || password.length < 7) {
            setErrors({ ...errors, password: true });
            alert("¡Password vacío o demasiado corto!");
            passwordRef.current.focus();
            return;
        }

        setErrors({
            name: false,
            email: false,
            password: false
        });

        alert(
            `Usuario registrado: ${name} - ${email} - ${password}`
        );

        navigate("/login");
    };

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>

                <Row className="mb-2">
                    <h5>¡Registrate en Las Pelis de la 2TUP8!</h5>
                </Row>

                <Form onSubmit={handleSubmit}>

                    <FormGroup className="mb-4">
                        <Form.Control
                            type="text"
                            required
                            ref={nameRef}
                            placeholder="Ingresar nombre"
                            onChange={handleNameChange}
                            value={name}
                            className={errors.name ? "border border-danger" : ""}
                        />
                    </FormGroup>

                    <FormGroup className="mb-4">
                        <Form.Control
                            type="email"
                            required
                            ref={emailRef}
                            placeholder="Ingresar email"
                            onChange={handleEmailChange}
                            value={email}
                            className={errors.email ? "border border-danger" : ""}
                        />
                    </FormGroup>

                    <FormGroup className="mb-4">
                        <Form.Control
                            type="password"
                            required
                            ref={passwordRef}
                            placeholder="Ingresar contraseña"
                            onChange={handlePasswordChange}
                            value={password}
                            className={errors.password ? "border border-danger" : ""}
                        />
                    </FormGroup>

                    {(errors.name || errors.email || errors.password) && (
                        <p className="text-danger small">
                            Debés completar todos los campos. La contraseña
                            debe tener 7 o más caracteres.
                        </p>
                    )}

                    <Row>
                        <Col />
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="secondary" type="submit">
                                Registrarse
                            </Button>
                        </Col>
                    </Row>

                </Form>
            </Card.Body>
        </Card>
    );
};

export default Register;