import React from 'react';
import './App.css';
import Header from "./Header";
import NavMenu from "./NavMenu";
import Slider from "./SlickSlider";
import Grids from "./GridLay";
import Stores from "./Store";
import Featured from "./Featured";
import Prefoot from "./PreFooter";
import Footmenu from "./FooterMenu";
import Footfeature from "./FootFeature";
import Footer from "./Footer";
import ban1 from "./images/ban1.gif";
import ban2 from "./images/ban2.jpg";
import Postheader from './Postheader';
import Discover from './Discover';
import ScrollArrow from './ScrollArrow';


function App() {
  
  return (
    <div className="App">
      <ScrollArrow />
      <Header />
      <NavMenu />
      <Postheader />
      <Slider />
      <div>
        <img src={ban1} alt="gif img" width="100%"></img> <br/>
      </div>
      <br />
      <h5>IN THE SPOTLIGHT</h5>
      <br />
      <Grids />
      <div >
        <img className="ban2" src={ban2} alt="banner-sale" width="100%"></img>
      </div>
      <br />
      <h5>STORE IN FOCUS</h5><br />
      <Stores />
      <br />
      <h5>FEATURED BRANDS</h5><br />
      <Featured />
      <br />
      <h5>DISCOVER NOW</h5>
      <Discover />
      <Prefoot />
      <Footmenu />
      <Footfeature />
      <Footer />
    </div>
    
  );
}

export default App;
