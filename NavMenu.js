import React from "react";
import { Navbar } from 'react-bootstrap';
import { Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/navmenu.css";
import logo from "./images/NykaaLogoSvg.svg";

class NavMenu extends React.Component{
    render(){
        return(
            <div>
                <div class="conatiner-fluid">
                <nav>
                    <Navbar class="navbar" expand="lg">
                        <Navbar.Brand id="brand" href="#home"><img src={logo} alt="logo" ></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link id="linkText" href="#home">CATEGORIES</Nav.Link>
                            <Nav.Link id="linkText" href="#link">BRANDS</Nav.Link>
                            <Nav.Link id="linkText" href="#link">NYKAA FASHION</Nav.Link>
                            <Nav.Link id="linkText" href="#link">BEAUTY ADVICE</Nav.Link>
                            <Nav.Link id="linkText" href="#link">NYKAA NETWORK</Nav.Link>
                            </Nav>
                            <div class="searchbar_main">
                              <div class="form-group has-search">
                                <span class="fa fa-search form-control-feedback"></span>
                                <input type="text" class="form-control" placeholder="Search for Products, Brands etc." />
                            </div>
                          </div>
                          <div className="nav_account">
                          <a href="App.js"><span ><i class="fa fa-user Nav_icon" aria-hidden="true"></i>Account</span></a>
                          </div>
                            <a href="App.js"><span class=""><i class="fa fa-shopping-bag" aria-hidden="true"></i></span></a>
                        </Navbar.Collapse>
                        </Navbar>
                    </nav>
                </div>
            </div>
)
    }
}
export default NavMenu;