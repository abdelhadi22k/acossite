
import { services } from "../data/services";
import { Container, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <Container id="Services">
      <div className="serviceSection">
        <div className="serviceInfSection">
          <h1>Service offer</h1>
          <p>
            <span>00/</span> We will devote our efforts to improving your site
            experience. We are here to provide you with advanced design services
            and professional programming, with the aim of achieving maximum
            performance and improving your site.
          </p>
          <Image src="fegma/ServiceImg.png" fluid />
        </div>

        <div className="serviceTitleSection">
          {services.map((element, index) => {
            return (
              <>
              <div className="line"></div>
              <div className="serviceBox" kye={index}>
                <span >0{index + 1}/</span>
               <div>
               <h1>{element.title}</h1>
               <h1>{element.workfor}</h1>
               </div>

                <Link > details </Link>
              </div>
              </>
            );
          })}
          <div className="line"></div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
