import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Experience = () => {
  return (
    <>
      <Container className="cv-container">
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Cinia Oy</Col>
            <Col>04/2020 -</Col>
          </Row>

          <p className="cv-item-header cv-prof-title">UX Designer</p>
          <p className="cv-item-text">
            Kerryttänyt laaja-alaista osaamista sekä kotimaisissa että
            kansainvälisissä haastavien toimintaympäristöjen
            ohjelmistoprojekteissa UX/UI-suunnittelijana, Scrum Masterina, Front
            end -kehittäjänä ja Palvelumuotoilijana. Osallistunut yrityksen UX
            maturiteetin kehittämiseen taskforce -toiminnan vetäjänä. Laatinut
            koulutusmateriaaleja ja näin edistänyt tiedon jakamista
            organisaation sisällä.
          </p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Keskuspuiston Nuorkauppakamari</Col>
            <Col>10/2018 - 11/2018</Col>
          </Row>

          <p className="cv-item-header cv-prof-title">Software Developer</p>
          <p className="cv-item-text">
            Päivittänyt Joulupuu-keräyksen verkkosivuston ulkoasua
            WordPress-julkaisualustalla. Työ tehty hyväntekeväisyytenä pro bono.
          </p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Manpower Group Oy</Col>
            <Col>11/2006 - 08/2017</Col>
          </Row>

          <p className="cv-item-header cv-prof-title">
            Customer Service Operation Coordinator
          </p>

          <p className="cv-item-text">
            Toiminut erilaisissa myynti-, asiakaspalvelu- ja back office
            -tehtävissä, sisältäen mm. Elisan ja Saunalahden sovellushallinta,
            laskutus ja avustavat reskontratyöt, asiakaspalvelu, henkilö- ja
            yritysasiakashallinta, työtehtävien koulutus ja mentorointi,
            tilauskäsittely ja tilauksien hallinta, ongelmatilanteiden
            konsultointi
          </p>
        </div>
      </Container>
    </>
  );
};

export default Experience;
