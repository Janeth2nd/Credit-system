import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';


const Login = () => {

    const navigate = useNavigate();
    const investedImg = require.context('../img', true)
    
    const [validated, setValidated] = useState(false);
    const [errors, setErrors] = useState({ employeeError: "Escribe un número de empleado válido.", passwordError: "Escribe una contraseña válida." });

    const handleSubmit = (event) => {
        const mockUser = {
            employee: '00153',
            password: 'srl_58'
        }

        console.log(event.target.passwordInput.value)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            handleError(event)
        } else {
            if (event.target.employeeInput.value === mockUser.employee && event.target.passwordInput.value === mockUser.password) {
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
            <div  style={{alignContent:"center",alignItems:"center" ,justifyContent:"center",display:"flex", width:"100%"}}>
            <Form  noValidate validated={validated} onSubmit={handleSubmit}>

                <Form.Group controlId="employeeInput">
            
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

                <Form.Group className="mb-2" controlId="passwordInput">
                    <Form.Label >Contraseña</Form.Label>
                    <Form.Control 
                        type="password"
                        required
                        isInvalid={!!validated}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.passwordError}
                    </Form.Control.Feedback>
                </Form.Group>

                <div style={{justifyContent:'center', display:"flex"}}> <Button  type="submit">Ingresar</Button></div>

            </Form>
            </div> 
        </Container>
    );

}


export default Login