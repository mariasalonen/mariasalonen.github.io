import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import acceptTimes from "./img/accept-tipping-time-new.png";
import acceptTimesOld from "./img/accept-tipping-time-old.png";
import addTimes from "./img/add-tipping-times-new.png";
import addTimesOld from "./img/add-tipping-times-old.png";
import frameAgreements from "./img/frame-agreements-new.png";
import frameAgreementsOld from "./img/frame-agreements-old.png";

const Crops = () => {
  return (
    <>
      <Container className="cv-container">
        <div className="cv-item">
          <p className="cv-item-text">
            Crops project is about selling and buying grain. In the system,
            farmers can sell and deliver crops to the buyer. The buyer can set
            price information for different grain varieties for the harvest
            season, buy crops and manage cultivation agreements. I worked as a
            UX/UI designer in the project.
            {/* 'Case Crops' -projekti keskittyy viljan myyntiin ja ostoon.
            Järjestelmässä viljelijät voivat myydä ja toimittaa satoa ostajalle.
            Ostaja voi määrittää satokauden hintatietoja eri viljalajikkeille,
            ostaa satoa ja hallinnoida viljelysopimuksia. Toimin projektissa
            UX/UI-suunnittelijana.*/}
          </p>
          <p className="cv-item-header cv-prof-title">THE CHALLENGE</p>
          <p className="cv-item-text">
            The user interface of the application was wanted to be refreshed and
            updated to be more contemporary.
            {/* Sovelluksen käyttöliittymää haluttiin raikastaa ja päivittää
            ajanmukaisemmaksi.*/}
          </p>
          <p className="cv-item-header cv-prof-title">THE SOLUTION</p>
          <p className="cv-item-text">
            Mitä ja miten tehty, jotain design jargonia ja kuvia
          </p>
          <Row className="portfolio-img-row">
            <Col>
              <img
                className="portrait-img"
                src={frameAgreementsOld}
                alt="Frame agreements, old version"
              ></img>
            </Col>
            <Col>
              <img
                className="portrait-img"
                src={frameAgreements}
                alt="Frame agreements"
              ></img>
            </Col>
          </Row>
          <Row className="portfolio-img-row">
            <Col>
              <img
                className="portrait-img"
                src={addTimesOld}
                alt="Add times, old version"
              ></img>
            </Col>
            <Col>
              <img
                className="portrait-img"
                src={addTimes}
                alt="Add times"
              ></img>
            </Col>
          </Row>
          <Row className="portfolio-img-row">
            <Col>
              <img
                className="portrait-img"
                src={acceptTimesOld}
                alt="Accept times"
              ></img>
            </Col>
            <Col>
              <img
                className="portrait-img"
                src={acceptTimes}
                alt="Accept times"
              ></img>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Crops;
