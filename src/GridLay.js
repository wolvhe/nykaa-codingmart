import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/GridLay.css";
import prod1 from "./images/prod1.gif";
import prod2 from "./images/prod2.gif";
import prod3 from "./images/prod3.gif";
import prod4 from "./images/prod4.jpg";


function GridLay(){
    return(
     <div id="Grid" >
         <Container  >
             <Row>
                 <Col lg={6}>
                    <img src={prod1}></img>
                 </Col>
                 <Col lg={6}>
                 <img src={prod2}></img>
                 </Col>
             </Row>
         </Container>

        
         <Container  >
             <Row>
                 <Col lg={6}>
                 <img src={prod3}></img>
                 </Col>
                 <Col lg={6}>
                 <img src={prod4}></img>
                 </Col>
             </Row>
         </Container>

        
     </div>
    ) ;
 }
 export default GridLay;