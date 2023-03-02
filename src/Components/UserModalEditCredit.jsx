import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const UserModalEditCredit = ({ show, handleShow, handleSubmit, user }) => { 


    return (
        <> 
        <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Agregar nuevo crédito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={false} id="userForm" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="id">
                            <Form.Label>Id</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                required
                                defaultValue={user.id}   
                            />
                            </Form.Group>
                        <Form.Group className="mb-3" controlId="amount">
                            <Form.Label>Monto solicitado</Form.Label>
                            <Form.Control
                                type="number"
                                defaultValue={user.amount}
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="parcialidades">
                            <Form.Label>Parcialidades</Form.Label>
                            <Form.Control
                                type="number"
                                defaultValue={user.parcialidades}
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="montoPagado">
                            <Form.Label>Monto Pagado</Form.Label>
                            <Form.Control
                                type="number"
                                defaultValue={user.montoPagado}
                                
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="montoRestante">
                            <Form.Label>Monto Restante</Form.Label>
                            <Form.Control
                                type="number"
                                defaultValue={user.montoRestante}
                                
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button  variant="secondary" onClick={handleShow}>
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

export default UserModalEditCredit;