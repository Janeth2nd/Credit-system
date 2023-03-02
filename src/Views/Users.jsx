import React,{useState} from 'react';
import {  useNavigate  } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import UserModalAdd from '../Components/UserModalAdd';
import UserModalEdit from '../Components/UserModalEdit';



const Users = () => {
    const navigate = useNavigate();
    const investedImg = require.context('../img', true)
    const usersArray = [
        {
            name: "Alfredo",
            rfc: "TAPA0280",
            tel: 5528943517,
            credits:[ {
                id: "XH31",
                amount: 10000,
                parcialidades: 2,
                montoPagado: 5000,
                montoRestante: 5000
            },
            {
                id: "XH32",
                amount: 8000,
                parcialidades: 1,
                montoPagado: 2000,
                montoRestante: 6000
            },
            {
                id: "XH33",
                amount: 17000,
                parcialidades: 3,
                montoPagado: 4250,
                montoRestante: 12750
            },
            {
                id: "XH34",
                amount: 4000,
                parcialidades: 4,
                montoPagado: 4000,
                montoRestante: 0
            }
            ]
        },
        {
            name: "Franc",
            rfc: "GAKO0880",
            tel: 7225804512,
            credits:[ {
                id: "XH31",
                amount: 10000,
                parcialidades: 2,
                montoPagado: 5000,
                montoRestante: 5000
            },
            ]
        },
        {
            name: "Sam",
            rfc: "LOSP8965",
            tel: 4454382897,
            credits:[ {
                id: "XH31",
                amount: 10000,
                parcialidades: 2,
                montoPagado: 5000,
                montoRestante: 5000
            },
            ]
        },
        {
            name: "Cinthya",
            rfc: "SEGT7289",
            tel: 5583796107,
            credits:[ {
                id: "XH31",
                amount: 10000,
                parcialidades: 2,
                montoPagado: 5000,
                montoRestante: 5000
            },
            ]
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
            tel: event.target.tel.value
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
            tel: event.target.tel.value
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

    const handleToCredits =(credits)=>{
        
        navigate("/credit", { state: {credits:credits}  });
    }

    return (

        <Container>
            <Row className="justify-content-md-center"><Col md="auto"><img className="img-thumbnail mx-auto d-block h-50 m-3" alt="img-invested" src={investedImg(`./invested-img.png`)}></img></Col></Row>
            <Row className="justify-content-md-end"> <Col md="2"><Button className="mb-3" variant="primary" onClick={handleShow}>Agregar</Button></Col></Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>RFC</th>
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
                                    <td><Button variant="outline-info"  onClick={()=>handleToCredits(user.credits)}>Ver créditos</Button>{' '}  
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
