import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./about.css";
import portrait from "./img/portrait.jpg";

const About = () => {
  return (
    <>
      <Container>
        <Row className="about-section" xs={1} md={2} lg={2}>
          <Col className="about-column-img col-4">
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
          <Col className="about-column-text col-8">
            {" "}
            <h1>MARIA SALONEN</h1>
           {/* <h3 className="finnish">
              UX DESIGNER, SCRUM MASTER, FRONT END -KEHITTÄJÄ
            </h3>
          
            <p className="finnish">
              Olen nopeasti uusiin rooleihin sopeutuva, monipuolinen
              ammattilainen. Hallitsen kokonaisuuksia ja pidän langat käsissäni
              haastavissakin tilanteissa. Olen ratkaisukeskeinen, utelias
              maailmaa kohtaan ja minulla on erinomaiset organisointi- ja
              ihmissuhdetaidot. Ylläpidän ja rakennan tiimihenkeä; minulle on
              tärkeää että kanssani on mukava tehdä töitä.
              <br></br>Arvostan merkityksellisiä projekteja, tukea ammatilliseen
              kehittymiseen sekä hyvää työkulttuuria.
            </p>*/}
            <h3 className="english">
              UX DESIGNER, SCRUM MASTER, FRONT END DEVELOPER AND MORE
            </h3>
            
            <p className="english">
              I am a versatile professional who quickly adapts to new roles. I
              manage things and keep the strings in my hands even in challenging
              situations. I am solution-oriented, curious about the world and
              have excellent organizational and interpersonal skills. I maintain
              and build team spirit; it is important to me that I’m fun to work
              with.
              <br></br>I appreciate meaningful projects, support for
              professional development and a good work culture.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
