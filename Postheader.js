import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/postheader.css";
import postheader_offers from "./images/postheader_offers.png";

function Postheader() {
    return (
        <div className="postheader_main">
            <div className="postheader_title">
                <p className="postheader_link">Makeup</p>
            </div>
            <div className="postheader_title">
                <p className="postheader_link">Skin</p>
            </div>
            <div className="postheader_title">
                <p className="postheader_link">Hair</p>
            </div>
            <div className="postheader_title">
                <p className="postheader_link">Applications</p>
            </div>
            <div className="postheader_title">
                <p className="postheader_link">Personal Care</p>
            </div>
            <div className="postheader_title">
                <p className="postheader_link">Natural</p>
            </div>
            <div className="postheader_title">
                <p className="postheader_link">Mom & Baby</p>
            </div>
            <div className="postheader_title">
                <p className="postheader_link">Health & Wellness</p>
            </div>
            <div className="postheader_title"> 
                <p className="postheader_link">Men</p>
            </div>
            <div className="postheader_title">
                <p className="postheader_link">Fragrance</p>
            </div>
            <div className="postheader_title">
                <p className="postheader_link postheader_link_bold">LUXE</p>
            </div>
            <div className="postheader_title_offers">
                <img src={postheader_offers} className="postheader_link" />
            </div>
        </div>
    )
}

export default Postheader
