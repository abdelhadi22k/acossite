import { Container } from "react-bootstrap";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Opinions from "../components/Opinions";
import { opinions } from "../data/opinions";

const OpinionSection = () => {
  const backgroundImageStyle = {
    backgroundImage: "url(fegma/opinions.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  };

  return (
    <>
      <div className="opinionsPage" style={backgroundImageStyle} id='testimonials'>
        <div className="shade">
          <Container className="opinion">
            <div className="opinioninfo">
              <h1>Our customers' opinions</h1>
              <p>
                We will devote our efforts to improving your site experience. We
                are here to provide you with advanced design services and
                professional programming, with the aim of achieving maximum
                performance
              </p>
              <button className="infobutton2">Add your opinion + </button>
            </div>

            <div className="opinionClient">
              <h1>Opinions </h1>

              <>
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwiper"
                >
                  {opinions.map((item, index) => {
                    return (
                      <SwiperSlide key={index} className="SwiperSlide">
                        <Opinions Opinion={item} />
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </>
            </div>
          </Container>
        </div>
      </div>
      <div className="margen"></div>
    </>
  );
};

export default OpinionSection;
