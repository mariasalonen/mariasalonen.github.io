import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <>
      <Container className="cv-container cv-item">
        <Row className="cv-item-header skills-row">
          <Col>
            <div className="skills-header">TAIDOT</div>
            <p className="cv-item-text">
              Fasilitointi <br></br>
              Ihmissuhdetaidot <br></br>
              Organisointitaidot <br></br>
              SAFe <br></br>
              Scrum
            </p>
            <Col>
            <div className="skills-header">KIELITAITO</div>
            <p className="cv-item-text">
              Suomi - Äidinkieli <br></br>
              Englanti - Sujuva <br></br>
              Ruotsi - Perusteet
            </p>
          </Col>
          </Col>
 
          <Col className="skills-right-col">
            <div className="skills-header">TEKNOLOGIAT</div>
            <p className="cv-item-text">
              React <br></br>TypeScript <br></br>HTML <br></br>CSS <br></br>
              JavaScript
            </p>
            <div className="skills-header">TYÖKALUT</div>
            <p className="cv-item-text">
              Figma <br></br> Adobe XD <br></br>GitHub & GitLab <br></br>Azure
              Devops <br></br>Microsoft Office -työkalut
            </p>
          </Col>
        </Row>
        
      </Container>
    </>
  );
};

export default Skills;
