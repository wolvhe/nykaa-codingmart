import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/GridLay.css";
import prod1 from "./images/prod1.gif";
import prod2 from "./images/prod2.jpg";
import prod3 from "./images/prod3.jpg";
import prod4 from "./images/prod4.jpg";
import prod5 from "./images/prod5.gif";
import prod6 from "./images/prod6.jpg";
import prod7 from "./images/prod7.jpg";


function GridLay(){
    return(
     <div id="Grid" >
         <Container  >
             <Row>
                 <Col lg={6} width="100%">
                    <img className="product_image" src={prod7} width="100%"></img>
                    <div className="gridproduct_text" width="100%">
                     <p className="prod_text">Flat 40% OFF</p>
                     <p className="prod_subtext">Create Bold Looks With The Colossal Range!</p>
                 </div>
                 </Col>
                 <Col lg={6}>
                 <img className="product_image" src={prod4}></img>
                 <div className="gridproduct_text">
                     <p className="prod_text">Flat 10% OFF</p>
                     <p className="prod_subtext">Inaugral Offer | Only For Today</p>
                 </div>
                 </Col>
             </Row>
         </Container>

         <Container  >
             <Row>
                 <Col lg={6}>
                 <img className="product_image" src={prod5}></img>
                 <div className="gridproduct_text">
                     <p className="prod_text">Upto 40% OFF + Free Masaba Lipstick</p>
                     <p className="prod_subtext">Worth Rs.599 On Rs.1200</p>
                 </div>
                 </Col>
                 <Col lg={6}>
                 <img className="product_image" src={prod6}></img>
                 <div className="gridproduct_text">
                     <p className="prod_text">Pick 2 Deluxe Samples</p>
                     <p className="prod_subtext">On Orders Above Rs.3000!</p>
                 </div>
                 </Col>
             </Row>
         </Container>
        
         <Container  >
             <Row>
                 <Col class="auto">
                 <img className="product_image product_image_single" src={prod1}></img>
                 </Col>
             </Row>
         </Container>


        
     </div>
    ) ;
 }
 export default GridLay;