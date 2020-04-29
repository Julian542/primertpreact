import React,{ Component } from "react"
import Navigator from "./Navigator";
import {instrumentos} from '../data/instrumentos.json';
import Tarjeta from "./Tarjeta";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Productos extends Component{

    constructor(){
        super();
        this.state = {
            instrumentos
        }
    }

    render(){
        const instrumentos = this.state.instrumentos.map((instrumento,i)=>{return(
            <Tarjeta id={instrumento.id} titulo={instrumento.instrumento} precio={instrumento.precio} costoEnvio={instrumento.costoEnvio} cantidadVendida={instrumento.cantidadVendida} imagenPath={instrumento.imagen}></Tarjeta>
        )})

        return(
            <React.Fragment>
                <Navigator></Navigator>
                <Container fluid="md">
                    
                        {instrumentos}
                   
                </Container>
            </React.Fragment>
        );
    }
}

export default Productos;