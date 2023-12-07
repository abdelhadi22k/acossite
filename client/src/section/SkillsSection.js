import { Container } from "react-bootstrap";

const SkillsSection = () => {
  return (
    <div className="SkillsEndExperience" id='Aboutme'>
      <Container className='SkillsEndExperienceholder'>
        <div className="skills">
          <h1>
            {" "}
            Skills & <br /> Experience{" "}
          </h1>
          <p>
            We will devote our efforts to improving your site experience. We are
            here to provide you with advanced design services and professional
            programming, with the aim of achieving maximum performance
          </p>
          <h4>Skills</h4>
          <div className="skillHolder">
            <div className="skillTitle">
              {" "}
              <img src="fegma/ux.png" alt=""></img> <span> UX Design</span>
            </div>
            <div className="skillTitle">
              {" "}
              <img src="fegma/ui.png" alt=""></img> <span>UI Design</span>
            </div>
            <div className="skillTitle">
              {" "}
              <img src="fegma/Wireframe.png" alt=""></img>{" "}
              <span>Wireframe</span>
            </div>
            <div className="skillTitle">
              {" "}
              <img src="fegma/Prototype.png" alt=""></img>{" "}
              <span>Prototype</span>
            </div>
            <div className="skillTitle">
              {" "}
              <img src="fegma/FullStack.png" alt=""></img>{" "}
              <span>FullStack</span>
            </div>
            <div className="skillTitle">
              {" "}
              <img src="fegma/Front-End.png" alt=""></img>{" "}
              <span>Front-End</span>
            </div>
            <div className="skillTitle">
              {" "}
              <img src="fegma/Back-End.png" alt=""></img> <span>Back-End</span>
            </div>
            <div className="skillTitle">
              {" "}
              <img src="fegma/SEO.png" alt="SEO"></img> <span>SEO</span>
            </div>
          </div>
        </div>

        <div className="experience">
          <h4> Experience </h4>

          <div className="lightline"></div>
          <div className="experienceHolder">
            <span>2021 - Present</span>
            <div>
              <h1>Web Developer</h1>
             <span>Freelancer</span>
            </div>
          </div>
          
          <div className="lightline"></div>
          <div className="experienceHolder">
            <span>2021 - Present</span>
            <div>
              <h1>UIUX Designer</h1>
             <span>Freelancer</span>
            </div>
          </div>
          

          <div className="lightline"></div>
          <div className="experienceHolder">
            <span>2022 - Present</span>
            <div>
              <h1>SEO</h1>
             <span>Freelancer</span>
            </div>
          </div>

          <div className="lightline"></div>
          <div className="experienceHolder">
            <span>2021 - Present</span>
            <div>
              <h1>+60 Completed project </h1>
             <span>Freelancer</span>
            </div>
          </div>
          
        </div>
      </Container>
    </div>
  );
};
export default SkillsSection;



