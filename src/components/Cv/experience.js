import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Experience = () => {
  return (
    <>
      <Container className="cv-container">
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Cinia Oy</Col>
            <Col className="cv-item-header-right-col">04/2020 -</Col>
          </Row>

          <p className="cv-item-header cv-prof-title">UX Designer</p>
          <p className="cv-item-text">
            Gathered extensive expertise in both domestic and global software
            projects in challenging operating environments as a UX/UI designer,
            Scrum Master, Front end developer and Service designer. Participated
            in the development of the company's UX maturity as the leader of the
            UX task force. Prepared training materials and thus promoted the
            sharing of information within the organization. Supported sales in
            the offer making processes.
            {/*  Kerryttänyt laaja-alaista osaamista sekä kotimaisissa että
            kansainvälisissä haastavien toimintaympäristöjen
            ohjelmistoprojekteissa UX/UI-suunnittelijana, Scrum Masterina, Front
            end -kehittäjänä ja Palvelumuotoilijana. Osallistunut yrityksen UX
            maturiteetin kehittämiseen taskforce -toiminnan vetäjänä. Laatinut
            koulutusmateriaaleja ja näin edistänyt tiedon jakamista
            organisaation sisällä. Toiminut tukena myynnin tarjousprosesseissa.*/}
          </p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Keskuspuiston Nuorkauppakamari</Col>
            <Col className="cv-item-header-right-col">10/2018 - 11/2018</Col>
          </Row>

          <p className="cv-item-header cv-prof-title">Software Developer</p>
          <p className="cv-item-text">
            Updated the appearance of the Joulupuu charity campaign website on
            the WordPress publishing platform. Work done pro bono.
            {/* Päivittänyt Joulupuu-keräyksen verkkosivuston ulkoasua
            WordPress-julkaisualustalla. Työ tehty hyväntekeväisyytenä pro bono.*/}
          </p>
        </div>
        <div className="cv-item">
          <Row className="cv-item-header">
            <Col>Manpower Group Oy</Col>
            <Col className="cv-item-header-right-col">11/2006 - 08/2017</Col>
          </Row>

          <p className="cv-item-header cv-prof-title">
            Customer Service Operation Coordinator
          </p>

          <p className="cv-item-text">
            Worked in various sales, customer service and back office tasks,
            including Elisa and Saunalahti's application management, invoicing
            and supporting ledger work, customer service, personal and business
            customer management, job training and mentoring, order processing
            and order management, consulting for problem situations
            {/* Toiminut erilaisissa myynti-, asiakaspalvelu- ja back office
            -tehtävissä, sisältäen mm. Elisan ja Saunalahden sovellushallinta,
            laskutus ja avustavat reskontratyöt, asiakaspalvelu, henkilö- ja
            yritysasiakashallinta, työtehtävien koulutus ja mentorointi,
            tilauskäsittely ja tilauksien hallinta, ongelmatilanteiden
            konsultointi*/}
          </p>
        </div>
      </Container>
    </>
  );
};

export default Experience;
