import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { AuthenticationContext } from "../../services/auth/auth.context";
import { errorToast, successToast } from "../../shared/toast/toast";
import ToggleTheme from "../../ui/toggleTheme/ToggleTheme";

const Login = () => {
    const { handleUserLogin } = useContext(AuthenticationContext)
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
            errorToast("¡Email vacío!");
            emailRef.current.focus();
            return;
        }

        if (!password.length || password.length < 7) {
            setErrors({ ...errors, password: true });
            errorToast("¡Password vacío o demasiado corto!");
            passwordRef.current.focus();
            return;
        }

        let data = {
            email,
            password
        }

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-type": "application/json" },
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
                setErrors({ email: false, password: false });
                successToast("Sesion iniciada con exito")
                navigate("/catalog");
                handleUserLogin(res.token);
            })
            .catch(err => console.log(err))
    };

    const handleNavigateRegister = () => {
        navigate("/register");
    }

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

                    <Row className="justify-content-end">
                        <Col xl={2} md={4} className="d-flex justify-content-end">
                            <ToggleTheme />
                        </Col>
                        <Col xl={2} md={4} className="d-flex justify-content-end">
                            <Button variant="secondary" onClick={handleNavigateRegister}>
                                Registrarse
                            </Button>
                        </Col>
                        <Col xl={2} md={4} className="d-flex justify-content-end">
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
