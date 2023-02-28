import Container from 'react-bootstrap/Container';
import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({ employeeError: "Escribe un número de empleado válido.", passwordError: "Escribe una contraseña válida." });

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
                setValidated(false);
            } else {
                console.log("entra",event.target.employeeInput.value === mockUser.employee)
                setErrors({employeeError:"",passwordError:"Usuario invalido"})
                handleError(event)
            }

        }

    };

    const handleError =(event)=>{
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
    }
    return (
        <Container>


            <Form noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="employeeInput">
                    <Form.Label>Número de empleado</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        isInvalid={!!validated}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.employeeError}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="passwordInput">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
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