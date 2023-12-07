import React from "react";
import { Container, Image } from "react-bootstrap";

const ConnectMe = () => {
  return (
    <div id='Connectme' className="connectMe">
      <Container className="connectMeContainer">
        <div className="connectMeInfo">
          <h1>Let's see the details of your project</h1>

          <div className="connectHolder">
            <div className="lightline"></div>

            <div className="connectBox">
              <div className="connectIcon">
                <i class="fa-solid fa-at"></i>
              </div>
              <div className="connectIconInfo">
                <span>Email</span>
                <h5>acos.test@gmail.com</h5>
              </div>
            </div>

            <div className="lightline"></div>

            <div className="connectBox">
              <div className="connectIcon">
              <i className="fa-regular fa-message"></i>
              </div>
              <div className="connectIconInfo">
                <span>accounts to contact us</span>
                <div>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-whatsapp"></i>
                </div>
                
              </div>
            </div>

            <div className="lightline"></div>
          </div>
        </div>

        <div className="connectMeImg">
          <Image src="fegma/Mention-rafiki 11.png" fluid />
        </div>
      </Container>
      <Container className="Lastlightline">
      <div className="lightline"></div>

<div className='copyRiht'>
<div> <span>C 2024:  All Right Reserved</span></div>
<div> <span>Designed By: Abdelhadi Kaba</span></div>
<div> <span>Email: acos.test@gmail.com</span></div>
</div>

      </Container>
    </div>
  );
};

export default ConnectMe;
