import Container from 'react-bootstrap/Container';
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';


const Login = () => {
    const investedImg = require.context('../img', true)
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({ employeeError: "Escribe un número de empleado válido.", passwordError: "Escribe una contraseña válida." });

    const navigate = useNavigate();

    
    const handleSubmit = (event) => {
        const mockUser = {
            employee: '1234',
            password: 'hello'
        }
        
        console.log(event.target.passwordInput.value)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            handleError(event)
        } else {
            if (event.target.employeeInput.value === mockUser.employee && event.target.passwordInput.value === mockUser.password) {
                //navega a la vista
                navigate("/users");
                setValidated(false);
            } else {
                console.log("entra", event.target.employeeInput.value === mockUser.employee)
                setErrors({ employeeError: "", passwordError: "Usuario invalido" })
                handleError(event)
            }

        }

    };

    const handleError = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
    }
    return (
        <Container className="display-flex">
            <Row className="justify-content-md-center"><Col md="auto"><img className="img-thumbnail mx-auto d-block h-50 m-3" alt="img-invested" src={investedImg(`./invested-img.png`)}></img></Col></Row>

            <Form  noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group  controlId="employeeInput">
                    <Form.Label>Número de empleado</Form.Label>
                    <Form.Control className="w-25 p-1.5"
                        required
                        type="number"
                        isInvalid={!!validated}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.employeeError}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-2" controlId="passwordInput">
                    <Form.Label >Contraseña</Form.Label>
                    <Form.Control className="w-25 p-1.5"
                        type="password"
                        required
                        isInvalid={!!validated}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.passwordError}
                    </Form.Control.Feedback>
                </Form.Group>

                <Button type="submit">Ingresar</Button>
            </Form>
        </Container>
    );

}


export default Login