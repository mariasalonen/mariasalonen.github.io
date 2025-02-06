import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Education = () => {
  return (
    <>
      <Container className="cv-container">
        {" "}
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Introduction to Service Design</Col>
            <Col className="cv-item-header-right-col">2024</Col>
          </Row>
          <p className="cv-item-text">University of Lapland</p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Scrum With User Experience I</Col>
            <Col className="cv-item-header-right-col">2024</Col>
          </Row>
          <p className="cv-item-text">Scrum.org</p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Certifed SAFe 6 Scrum Master</Col>
            <Col className="cv-item-header-right-col">2023</Col>
          </Row>
          <p className="cv-item-text">Scaled Agile</p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Certifed Scrum Master</Col>
            <Col className="cv-item-header-right-col">2022</Col>
          </Row>
          <p className="cv-item-text">Scrum Alliance</p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Bachelor of Engineering,<br></br> Information and communication technology</Col>
            <Col className="cv-item-header-right-col">2017 - 2020</Col>
          </Row>
          <p className="cv-item-header cv-subheader">Media Technology</p>
          <p className="cv-item-text">Jyväskylä University of Applied Sciences</p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Gardener</Col>
            <Col className="cv-item-header-right-col">2010 - 2013</Col>
          </Row>
          <p className="cv-item-text">Jämsän Ammattiopisto</p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Secondary school graduate</Col>
            <Col className="cv-item-header-right-col">2002 - 2005</Col>
          </Row>
          <p className="cv-item-text">Cygnaeus-lukio</p>
        </div>
      </Container>
    </>
  );
};

export default Education;
