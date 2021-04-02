import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/GridLay.css";
import logo from "./images/NykaaLogoSvg.svg";


function Prefoot(){
    return(
     <div id="footm" >
         <Container  >
             <Row>
                 <Col lg={2} className="footer_menu_col">
                 <img src={logo} alt="logo" className="footer_menu_logo"></img>
                     <ul>
                         <li><a href="">WHO ARE WE?</a></li>
                         <li><a href="">CAREERS</a></li>
                         <li><a href="">AUTHENTICITY</a></li>
                         <li><a href="">PRESS</a></li>
                         <li><a href="">TESTIMONIALS</a></li>
                         <li><a href="">NYKAA CSR</a></li>
                     </ul>
                 
                 </Col>
                 
                 
                 <Col lg={3} className="footer_menu_col">
                     <h6>HELP</h6>
                     
                     <ul>
                         <li><a href="">CONTACT US</a></li>
                         <li><a href="">FREQUENTLY ASKED QUESTIONS</a></li>
                         <li><a href="">STORE LOCATOR</a></li>
                         <li><a href="">CANCELLATION AND RETURN</a></li>
                         <li><a href="">SHIPPING & DELIVERY</a></li>
                     </ul>
                 
                 </Col>
                                 
                 
                 <Col lg={2} className="footer_menu_col">
                 <h6>INSPIRE ME</h6>
                     
                     <ul>
                         <li><a href="">BEAUTY BOOK</a></li>
                         <li><a href="">NYKAA TV</a></li>
                         <li><a href="">NYKAA NETWORK</a></li>
                         <li><a href="">ROUTINE FINDER</a></li>
                         <li><a href="">BUYING GUIDES</a></li>
                     </ul>
                 
                 </Col>
                 
                 
                 <Col lg={2} className="footer_menu_col">
                 <h6>QUICK LINKS</h6>
                     
                     <ul>
                         <li><a href="">OFFER ZONE</a></li>
                         <li><a href="">NEW LAUNCHES </a></li>
                         <li><a href="">NYKAA MAN</a></li>
                         <li><a href="">NYKAA FASHION</a></li>
                         <li><a href="">NYKAA PRO</a></li>
                         <li><a href="">NYKAA FEMINA BEAUTY AWARDS</a></li>
                         <li><a href="">SITEMAP</a></li>
                     </ul>
                
                 </Col>
                 
                 <Col lg={2} className="footer_menu_col">
                 <h6>TOP CATEGORIES</h6>
                     
                     <ul>
                         <li><a href="">MAKEUP</a></li>
                         <li><a href="">SKIN </a></li>
                         <li><a href="">HAIR</a></li>
                         <li><a href="">PERSONAL CARE</a></li>
                         <li><a href="">APPLIANCES </a></li>
                     </ul>
                 </Col>
                 
                 
                 
                 <Col lg={1} className="footer_menu_col">
                      <ul>
                        <br></br>
                         <li><a href="">MOM & BABY</a></li>
                         <li><a href="">WELLNESS</a></li>
                         <li><a href="">FRAGRANCE</a></li>
                         <li><a href="">NATURAL</a></li>
                         <li><a href="">LUXE</a></li>
                     </ul>
                 </Col>
             </Row>
         </Container>    
     </div>
    ) ;
 }
 export default Prefoot;