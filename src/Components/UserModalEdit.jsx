import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const UserModalEdit = ({ show, handleShow, handleSubmit, user }) => { //cómo se importaron estos props desde Users???


    return (
        <>
            <Modal show={show} onHide={handleShow}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={false} id="userForm" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="rfc">
                            <Form.Label>RFC</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                required
                                defaultValue={user.rfc}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={user.name}

                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="tel">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                type="number"
                                defaultValue={user.tel}

                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleShow}>
                        Cancelar
                    </Button>
                    <Button type="submit" variant="primary" form="userForm">
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserModalEdit;