import React from 'react';
import {Container,CardDeck ,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/featured.css"



function Featured(){
    return(
        <div>
        <Container id="featured">
        <CardDeck >
            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/f8aa2a60-e60f-4d69-aa24-15bd0d40777b.jpg" />
                <Card.Title>Upto 17% OFF</Card.Title>                                
            </Card>

            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/351b195c-7c49-4703-818a-1cde80fc429a.gif" />
                
                <Card.Title>On Rs.1900: 2 Primers Samples +</Card.Title>
                
                <Card.Body>
                    <p>On Rs.3000: Full Size Lipstick Worth Rs.2100</p>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/3de6d006-8785-472a-a0bc-ca481f20d915.jpg" />                
                <Card.Title>Buy 1 Get 1 Free</Card.Title>
                <Card.Body>
                    <p>Bioderma Sensibio 500ml</p>
                </Card.Body>
            </Card>


            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/929f54be-6178-4a6a-a0f3-d6b6007d2d8c.jpg" />
                <Card.Title>Upto 50% OFF</Card.Title>
            </Card>
        </CardDeck>
        

        
     </Container>
     <br />

    <Container >
        <CardDeck>
            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/58e03e81-5487-4f4e-8e9b-49266c9031c9.jpg" />
                <Card.Title>Upto 20% OFF</Card.Title>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/0fdd32f6-661f-4c35-9798-8854427c99a9.jpg" />
                <Card.Title>Complimentary Mini Glow Tonic<br /> (15ml)</Card.Title>
                
                <Card.Body>
                    <p>On Orders Of Rs.2000!</p>
                </Card.Body>
            </Card>

            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/65c90b41-f71a-4c98-b662-6042b803dc0d.jpg" />
                <Card.Title>Complimentary Hydration Trio Worth Rs.1200</Card.Title>
                
                <Card.Body>
                    <p>On All Orders!</p>
                </Card.Body>
            </Card>


            <Card>
                <Card.Img variant="top" src="https://images-static.nykaa.com/tr:w-270,c-at_max/uploads/5c17bee4-a411-4e04-bf54-c015261d0bce.jpg" />
                <Card.Title>Upto 25% OFF +</Card.Title>
                
                <Card.Body>
                    <p>5% OFF On Purchase Of Rs.899 & Above</p>
                </Card.Body>
            </Card>
        </CardDeck>
        </Container>
        </div>
    ) ;
 }
 export default Featured;