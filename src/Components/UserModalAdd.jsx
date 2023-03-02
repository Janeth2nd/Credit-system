import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const UserModalAdd = ({ show, handleShow, handleSubmit }) => {


    return (
        <>
            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar nuevo usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={false} id="userForm" onSubmit={handleSubmit} >

                        <Form.Group className="mb-3" controlId="rfc">
                            <Form.Label>RFC</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name" >
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="tel" >
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                type="number"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="amount" >
                            <Form.Label>Monto solicitado</Form.Label>
                            <Form.Control
                                type="number"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="invoice" >
                            <Form.Label>Folio de crédito</Form.Label>
                            <Form.Control
                                type="text"
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>
                        Cancelar
                    </Button>
                    <Button type="submit" variant="primary" form="userForm">
                        
                        Agregar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserModalAdd;