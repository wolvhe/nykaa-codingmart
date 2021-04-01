import React from "react";
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./images/caro1.jpg";
import img2 from "./images/caro2.jpg";
import img3 from "./images/caro3.gif";
import img4 from "./images/caro4.jpg";
import img6 from "./images/caro6.jpg";
import img7 from "./images/caro7.jpg";
import img8 from "./images/caro8.gif";


class Carousels extends React.Component{
    render(){
        return(
            <Container fluid className="w-100">
            <Carousel fade >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img4}
                alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img6}
                alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img7}
                alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img8}
                alt="Fourth slide"
                />
            </Carousel.Item>
            </Carousel>
            </Container>
        );
    }
}
export default Carousels;