import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";

const Login = ({ onLogin }) => {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

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

        setErrors({ email: false, password: false });
        alert(`El email ingresado es: ${email} y el password es ${password}`);

    
        onLogin();
        navigate("/catalog");
    };

    return (
        <Card className="mt-5 mx-3 p-3 px-5 shadow">
            <Card.Body>
                <Row className="mb-2">
                    <h5>¡Bienvenidos a Las Pelis de la 2TUP8!</h5>
                </Row>
                <Form onSubmit={handleSubmit}>
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

                    {(errors.email || errors.password) && (
                        <p className="text-danger small">
                            Debés completar los campos para iniciar sesión. La contraseña
                            debe tener 7 o más caracteres.
                        </p>
                    )}

                    <Row>
                        <Col />
                        <Col md={6} className="d-flex justify-content-end">
                            <Button variant="secondary" type="submit">
                                Iniciar sesión
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default Login;
