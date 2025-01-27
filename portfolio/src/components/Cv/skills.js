import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <>
      <Container className="cv-container cv-item">
        <Row className="cv-item-header skills-row">
          <Col>
            <div className="skills-header">SKILLS</div>
            <p className="cv-item-text">
              Facilitation <br></br>
              People skills <br></br>
              Organizational skills <br></br>
              SAFe <br></br>
              Scrum
            </p>
            <Col>
            <div className="skills-header">LANGUAGES</div>
            <p className="cv-item-text finnish">
              Finnish - Native <br></br>
              English - Excellent <br></br>
              Swedish - Basics
            </p>
          </Col>
          </Col>
 
          <Col className="skills-right-col">
            <div className="skills-header">TECHNOLOGIES</div>
            <p className="cv-item-text">
              React <br></br>TypeScript <br></br>HTML <br></br>CSS <br></br>
              JavaScript
            </p>
            <div className="skills-header">TOOLS</div>
            <p className="cv-item-text">
              Figma <br></br> Adobe XD <br></br>GitHub & GitLab <br></br>Azure
              Devops <br></br>Microsoft Office tools
            </p>
          </Col>
        </Row>
        
      </Container>
    </>
  );
};

export default Skills;
