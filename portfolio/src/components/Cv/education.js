import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Education = () => {
  return (
    <>
      <Container className="cv-container">
        {" "}
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Johdatus Palvelumuotoiluun</Col>
            <Col>2024</Col>
          </Row>
          <p className="cv-item-text">Lapin Yliopisto</p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Scrum With User Experience I</Col>
            <Col>2024</Col>
          </Row>
          <p className="cv-item-text">Scrum.org</p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Certifed SAFe 6 Scrum Master</Col>
            <Col>2023</Col>
          </Row>
          <p className="cv-item-text">Scaled Agile</p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Certifed Scrum Master</Col>
            <Col>2022</Col>
          </Row>
          <p className="cv-item-text">Scrum Alliance</p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Insinööri, Tieto- ja viestintätekniikka</Col>
            <Col>2017 - 2020</Col>
          </Row>
          <p className="cv-item-header cv-prof-title">Mediatekniikka</p>
          <p className="cv-item-text">Jyväskylän Ammattikorkeakoulu</p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Puutarhuri</Col>
            <Col>2010 - 2013</Col>
          </Row>
          <p className="cv-item-text">Jämsän Ammattiopisto</p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Ylioppilas</Col>
            <Col>2002 - 2005</Col>
          </Row>
          <p className="cv-item-text">Cygnaeus-lukio</p>
        </div>
      </Container>
    </>
  );
};

export default Education;
