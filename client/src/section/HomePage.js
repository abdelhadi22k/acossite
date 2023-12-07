import React from "react";
import { Container, Image } from "react-bootstrap";



const HomePage = () => {
  const backgroundImageStyle = {
    backgroundImage: "url(fegma/homepagemainimg.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };
  return (

    <>

    <div className="homepage" style={backgroundImageStyle} id="home">
      <div className="shade">
        <Container className="homeSection">
          <div className="mainInfo">
            <h1>Build your website with us: where design meets technology</h1>

            <p>
              We are here to improve your digital website with advanced design
              and programming, with a focus on SEO. Call today to develop your
              website and achieve a strong digital presence
            </p>
            <div className="infobutton">
              <button className="infobutton1" > Let's work together</button>
              <spne className='acount'>
                {" "}
                <span className="infobutton2">
                  Check me out <i class="fa-solid fa-arrow-right-long"></i>
                </span>
                <a href='#fdf'>
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href='#efd'>
                  {" "}
                  <i class="fa-brands fa-dribbble"></i>
                </a>
                <a href='#dfd'>
                  <i class="fa-brands fa-behance"></i>
                </a>                               
              </spne>
            </div>
          </div>
          <div className="mainImg">

   <Image  src="fegma/fuul logo w  1.png" fluid /> 

          </div>
        </Container> 
      </div>
    </div>
    <div className='margen'></div>

    </>
  );
};

export default HomePage;
