import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Tarjeta extends Component {
    render() {
        if (this.props.costoEnvio === "G") {
            return (
                <React.Fragment>
                    <Card className="margenesTarjeta">
                        <Card.Body className="cardBody">
                            <a href={`detalleProducto/${this.props.id}`}>
                                <img
                                    className="imagen"
                                    src={require(`../assets/images/${this.props.imagenPath}`)}
                                    alt="Imagen del Producto"
                                    align="left"
                                />
                            </a>
                            <div className="info">
                                <Card.Title>{this.props.titulo}</Card.Title>
                                <Card.Text>
                                    ${this.props.precio}
                                </Card.Text>
                                <Card.Text className="gratis">
                                    <img src={require(`../assets/images/camion.png`)}></img>Envio
                     Gratis a todo el pais
                     </Card.Text>
                                <Card.Text>
                                    {this.props.cantidadVendida} Vendidos
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <Card className="margenesTarjeta">
                        <Card.Body className="cardBody">
                            <a href={`detalleProducto/${this.props.id}`}>
                                <img
                                    className="imagen"
                                    src={require(`../assets/images/${this.props.imagenPath}`)}
                                    alt="Imagen del Producto"
                                    align="left"
                                />
                            </a>
                            <div className="info">
                                <Card.Title>{this.props.titulo}</Card.Title>
                                <Card.Text>
                                    ${this.props.precio}
                                </Card.Text>
                                <Card.Text className="pago">
                                    Costo de Envio Interior de Argentina: ${this.props.costoEnvio}
                                </Card.Text>
                                <Card.Text>
                                    {this.props.cantidadVendida} Vendidos
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </React.Fragment>
            );
        }
    }
}
export default Tarjeta;
/*
<Card>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
*/