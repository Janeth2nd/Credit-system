import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import UserModalCredit from '../Components/UserModalCredit';
import UserModalEditCredit from "../Components/UserModalEditCredit";


const Credit = () => {
    
    const investedImg = require.context('../img', true)
    const userCreditsArray = [
        {
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


    const [users, setUsers] = useState (userCreditsArray)
    const [showAdd, setShowAdd] = useState(false);
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
            id: event.target.id.value,
            amount: event.target.amount.value,
            parcialidades: event.target.parcialidades.value,
            montoPagado: event.target.montoPagado.value,
            montoRestante: event.target.montoRestante.value
            
        }
        setUsers([newUser,...users]);
        setShowAdd(false);
    }
    

    const handleDeleteCredit =(id)=>{
        const filteredUsers= users.filter(user=> user.id !== id); 
        setUsers(filteredUsers)
    }

    const handleEditUserSubmit =(event)=>{
        event.preventDefault();
        const newUser =  {
            id: event.target.id.value,
            amount: event.target.amount.value,
            parcialidades: event.target.parcialidades.value,
            montoPagado: event.target.montoPagado.value,
            montoRestante: event.target.montoRestante.value
        }
        const editedUsers = users.map((user) =>{
            if(userToEdit.id === user.id){
                return newUser
            }
            return user
        })
        setUsers(editedUsers)
        setShowEdit(false);
    }




    return (
        <Container>
            <Row className="justify-content-md-center"><Col md="auto"><img className="img-thumbnail mx-auto d-block h-50 m-3" alt="img-invested" src={investedImg(`./invested-img.png`)}></img></Col></Row>
            <Row className="justify-content-md-end"> <Col md="2" ><Button className="mb-3" variant="primary" onClick={handleShow}>Agregar crédito</Button></Col></Row> 
            
        <Row>
    
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Crédito solicitado</th>
                        <th>Parcialidades pagadas</th>
                        <th>Monto pagado</th>
                        <th>Monto restante</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            users.map((credit, elements) => (  
                                <tr key={elements}>
                                    <td>{credit.id}</td>
                                    <td>{credit.amount}</td>
                                    <td>{credit.parcialidades}</td>
                                    <td>{credit.montoPagado}</td> 
                                    <td>{credit.montoRestante}</td>
                                    <td> 
                                    
                                    <Button variant="outline-warning" onClick={()=>handleShowEdit(credit)}>Editar</Button>{' '}
                                    <Button variant="outline-danger" onClick={()=>handleDeleteCredit(credit.id)}>Borrar</Button>{' '}
                                    
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
            </Table>
            </Row>
            <UserModalCredit show={showAdd} handleShow={handleShow} handleSubmit={handleSubmit}/>
            <UserModalEditCredit show={showEdit} handleShow={()=>setShowEdit(!showEdit)} handleSubmit={handleEditUserSubmit} user={userToEdit}/>

        </Container>
    )
}
export default Credit