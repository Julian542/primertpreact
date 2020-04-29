import React, { Component } from "react";
import Navigator from "./Navigator";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { instrumentos } from "../data/instrumentos.json";
import OpcionEnvio from './OpcionEnvio';

class DetalleProducto extends Component {

    constructor() {
        super();
        this.state = {
            instrumentos
        }
    }

    render() {
        //logica del negocio
        console.log(this.props);
        const parametroId = this.props.match.params.id;
        const instrumentoEncontrado = instrumentos.filter(
            (instrumento) => instrumento.id === parametroId
        );
        // html a renderizar 
        return (
            <React.Fragment>
                <Navigator></Navigator>
                <div className="detalleFondo">
                    <Card className="detalleTarjeta">
                        <Container>
                            <Row>
                                <Col className="colUno">
                                    <img
                                        className="detalleFoto"
                                        src={require(`../assets/images/${instrumentoEncontrado[0].imagen}`)}
                                    />
                                    <h6 className="detalleDescripcion">
                                        Descripcion:
                                        <br />
                                        <br />
                                        {instrumentoEncontrado[0].descripcion}
                                    </h6>
                                </Col>
                                <Col className="colDos">
                                    <div className="fondito">
                                    <Row className="cantidadVendidos">
                                        {instrumentoEncontrado[0].cantidadVendida} vendidos
                                    </Row>
                                    <br />
                                    <Row>
                                        <h2>{instrumentoEncontrado[0].instrumento}</h2>
                                    </Row>
                                    <br />
                                    <Row>
                                        <h3>Precio:${instrumentoEncontrado[0].precio}</h3>
                                    </Row>
                                    <br />
                                    <Row>
                                        <h5>Marca:{instrumentoEncontrado[0].marca}</h5>
                                    </Row>
                                    <Row>
                                        <h5>modelo:{instrumentoEncontrado[0].modelo}</h5>
                                    </Row>
                                    <br />
                                    <Row>
                                        <h6>Costo Envio:</h6>
                                    </Row>
                                    <Row>
                                       <OpcionEnvio costoEnvio={instrumentoEncontrado[0].costoEnvio}></OpcionEnvio>
                                    </Row>
                                    <Row>
                                        
                                    <Button variant="outline-primary" size="lg" block>Agregar al Carrito</Button>
                                    </Row>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Nav.Link href="/productos">
                                        <h3>Volver</h3>
                                    </Nav.Link>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </div>
            </React.Fragment>
        );
    }
}
export default DetalleProducto;