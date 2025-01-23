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
            'Case Crops' -projekti keskittyy viljan myyntiin ja ostoon.
            Järjestelmässä viljelijät voivat myydä ja toimittaa satoa ostajalle.
            Ostaja voi määrittää satokauden hintatietoja eri viljalajikkeille,
            ostaa satoa ja hallinnoida viljelysopimuksia. Toimin projektissa
            UX/UI-suunnittelijana.
          </p>
          <p className="cv-item-header cv-prof-title">HAASTE</p>
          <p className="cv-item-text">
            Sovelluksen käyttöliittymää haluttiin raikastaa ja päivittää
            ajanmukaisemmaksi.
          </p>
          <p className="cv-item-header cv-prof-title">RATKAISU</p>
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
