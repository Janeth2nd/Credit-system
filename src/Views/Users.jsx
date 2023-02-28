import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import UserModalAdd from '../Components/UserModalAdd';
import UserModalEdit from '../Components/UserModalEdit';



const Users = () => {
    const usersArray = [
        {
            name: "Alfredo",
            rfc: "TAPA0280",
            tel: 55508759555
        },
        {
            name: "Franc",
            rfc: "GAKO0880",
            tel: 722589423361
        },
        {
            name: "Sam",
            rfc: "LOSP8965",
            tel: 78540875955
        },
        {
            name: "Cinthya",
            rfc: "SEGT7289",
            tel: 55508759555
        }
    ]

    const [users, setUsers] = useState (usersArray)
    const [showAdd, setShowAdd] = useState(false);   //mostrar modal, (quiero q inicie en false porq no quiero mostrarlo, hasta q el usuario lo decida)
    const [showEdit, setShowEdit] = useState(false);
    const [userToEdit, setUserToEdit] = useState({});

    const handleShow = () => setShowAdd(!showAdd); 
    const handleShowEdit = (user) => { 
        setShowEdit(!showEdit);
        setUserToEdit(user);
    }

    const handleSubmit =(event) =>{  
        event.preventDefault();
        const newUser =  {
            rfc: event.target.rfc.value,
            name: event.target.name.value,
            tel: event.target.tel.value,
        }
        setUsers([newUser,...users]);
        setShowAdd(false);
    }
    const handleDeleteUser =(rfc)=>{
        const filteredUsers= users.filter(user=> user.rfc !== rfc); 
        setUsers(filteredUsers)
    }

    const handleEditUserSubmit =(event)=>{
        event.preventDefault();
        const newUser =  {
            rfc: event.target.rfc.value,
            name: event.target.name.value,
            tel: event.target.tel.value,
        }
        const editedUsers = users.map((user) =>{
            if(userToEdit.rfc === user.rfc){
                return newUser
            }
            return user
        })
        setUsers(editedUsers)
        setShowEdit(false);
    }

    return (

        <Container>
            <Row className="justify-content-md-center"><Col md="auto">Bienvenido Alfred</Col></Row>
            <Row> <Col md="2"><Button variant="primary" onClick={handleShow}>Agregar</Button></Col></Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>RCF</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (  
                                <tr key={index}>
                                    <td>{user.rfc}</td>
                                    <td>{user.name}</td>
                                    <td>{user.tel}</td>
                                    <td><Button variant="outline-info">Ver créditos</Button>{' '}  
                                    <Button variant="outline-warning"  onClick={()=>handleShowEdit(user)}>Editar</Button>{' '}
                                    <Button variant="outline-danger" onClick={()=>handleDeleteUser(user.rfc)}>Eliminar</Button>{' '}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </Row>
            <UserModalAdd show={showAdd} handleShow={handleShow} handleSubmit={handleSubmit}/>
            <UserModalEdit show={showEdit} handleShow={()=>setShowEdit(!showEdit)} handleSubmit={handleEditUserSubmit} user={userToEdit}/>

        </Container>
    )
}
export default Users
