import React from 'react';
import {Container,CardDeck ,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/store.css";
import storeinfocus1 from "./images/storeinfocus1.gif";


function Store(){
    return(
     <Container >
        <CardDeck>
            <Card>
                <Card.Img variant="top" src={storeinfocus1} />
                <Card.Footer className="cardFooter_main">
                    <small>Breakout Solutions We Swear By!</small>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-560,c-at_max/uploads/4d1ef2f8-e289-4059-9d6c-4b020cf7b429.jpg" />
                
                <Card.Footer className="cardFooter_main">
                    <small>#Skingredient For A Plump Skin</small>
                </Card.Footer>
            </Card>
        </CardDeck>
        
     </Container>
    ) ;
 }
 export default Store;