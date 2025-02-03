import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <>
      <Container className="cv-container">
        <Row className="skills-row">
          <Col>
            <div className="skills-header">Skills</div>
            <p className="cv-item-text">
              Facilitation <br></br>
              People skills <br></br>
              Organizational skills <br></br>
              SAFe <br></br>
              Scrum
            </p>
          </Col>
          <Col>
            <div className="skills-header">Languages</div>
            <p className="cv-item-text finnish">
              Finnish - Native <br></br>
              English - Excellent <br></br>
              Swedish - Basics
            </p>
          </Col>

          <Col>
            <div className="skills-header">Tools</div>
            <p className="cv-item-text">
              Figma <br></br> Adobe XD <br></br>GitHub & GitLab <br></br>Azure
              Devops <br></br>Microsoft Office tools
            </p>
          </Col>
          <Col>
            <div className="skills-header">Technologies</div>
            <p className="cv-item-text">
              React <br></br>TypeScript <br></br>HTML <br></br>CSS <br></br>
              JavaScript
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Skills;
