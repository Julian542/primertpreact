import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

class Navigator extends Component {


    render(){
        return(
            <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/ubicacion">¿Donde estamos?</Nav.Link>
                    <Nav.Link href="/productos">Productos</Nav.Link>
                </Nav>
            </Navbar>
        </React.Fragment>
        );
    }
}
export default Navigator;

/* 

        */