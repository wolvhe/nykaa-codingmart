import React from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faMobileAlt,faPhoneAlt  } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/GridLay.css";
import googleplay from "./images/googleplay.png";
import appstore from "./images/appstore.png";


function Prefoot(){
    return(
     <div id="pref" >
         <Container  >
             <Row>
                 <Col lg={4}>
                 <div className="prefoot_text">
                         <div className="prefoot_icon"><FontAwesomeIcon icon={faEnvelope}/></div>
                         <div><p > GET SPECIAL DISCOUNT IN YOUR INBOX</p></div>                 
                 </div>
                 <Form id="newsletter">
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail" className="footer_search_bar">
                        <Form.Control type="email" placeholder="Enter Your Email Id" />
                        </Form.Group>

                        <Form.Group as={Col} >
                        <Button variant="outline-light" type="submit">
                            SEND
                        </Button>
                        </Form.Group>
                    </Form.Row>
                    </Form>
                 </Col>
                 
                 
                 <Col lg={4}>
                
                 <div className="prefoot_text2">
                         <div className="prefoot_icon"><FontAwesomeIcon icon={faMobileAlt}/></div>
                         <div><p>EXPERIENCE THE NYKAA MOBILE APP</p></div>                 
                 </div>
                 <div className="footer_storeicons">
                    <img src={googleplay} className="footer_icon" />
                    <img src={appstore} className="footer_icon" />
                </div>
                 </Col>
                 
                 
                 
                 <Col lg={4}>
                     <div className="prefoot_text">
                         <div className="prefoot_icon"><FontAwesomeIcon icon={faPhoneAlt}/></div>
                         <div><p className="prefoot_text_col3"> FOR ANY HELP YOU MAY CALL US AT <br/>1800-267-4444</p>
                 <p className="prefoot_text_col3">(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</p></div>
                 
                 </div>
                 </Col>
                 
             </Row>
         </Container>    
     </div>
    ) ;
 }
 export default Prefoot;