import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import portrait from "./img/portrait.jpg";

const About = () => {
  return (
    <>
      <Container>
        <Row className="about-section" xs={1} md={2} lg={2}>
          <Col className="about-column-img col-6">
            <img
              className="portrait-img"
              src={portrait}
              alt="Maria Salonen"
            ></img>
            <p className="contact-info">
              measalonen@gmail.com
              <a href="https://www.linkedin.com/in/salosenmaria/">LinkedIn</a>
            </p>
          </Col>
          <Col className="about-column-text col-6">
            {" "}
            <h1>MARIA SALONEN</h1>
            <h3>UX DESIGNER, SCRUM MASTER, FRONT END -KEHITTÄJÄ</h3>
            <p>
              Olen nopeasti uusiin rooleihin sopeutuva, monipuolinen
              ammattilainen. Hallitsen kokonaisuuksia ja pidän langat käsissäni
              haastavissakin tilanteissa. Olen ratkaisukeskeinen, utelias
              maailmaa kohtaan ja minulla on erinomaiset organisointi- ja
              ihmissuhdetaidot. Ylläpidän ja rakennan tiimihenkeä; minulle on
              tärkeää että kanssani on mukava tehdä töitä.
              <br></br>Arvostan merkityksellisiä projekteja, tukea ammatilliseen
              kehittymiseen sekä hyvää työkulttuuria.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
