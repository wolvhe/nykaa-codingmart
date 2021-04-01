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

function App() {
  return (
    <div className="App">
      <Header />
      <NavMenu />
      <Slider />
      <div>
        <img src={ban1} alt="gif img"></img> <br/>
      </div>
      <br />
      <h5>IN THE SPOTLIGHT</h5>
      <br />
      <Grids />
      <div >
        <img src={ban2} alt="banner-sale"></img>
      </div>
      <br />
      <h5>STORE IN FOCUS</h5><br />
      <Stores />
      <br />
      <h5>FEATURED BRANDS</h5><br />
      {/* <Featured /> */}
      <Prefoot />
      <Footmenu />
      {/* <Footfeature /> */}
      <Footer />
    </div>
    
  );
}

export default App;
