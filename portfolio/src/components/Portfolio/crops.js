import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import confirmTipping from "./img/confirm-tipping.png";
import addTipping from "./img/add-tipping.png";
import frameAgreements from "./img/frame-agreements.png";
import tippingCalendar from "./img/tipping-calendar.png";

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
            Color palette was updated to be more modern and the user interface
            was simplified, modernized and designed to appear more consistent. Icons and color coding were used to make the user interface more intuitive.
          </p>
          <Row className="portfolio-img-crops">
            <Col>
              <img
                className="portfolio-img"
                src={frameAgreements}
                alt="Frame agreements view"
              ></img>
            </Col>
            <Col>
              <img
                className="portfolio-img"
                src={tippingCalendar}
                alt="Calendar view for tipping times"
              ></img>
            </Col>
          </Row>
          <Row className="portfolio-img-row">
            <Col>
              <img
                className="portfolio-img"
                src={addTipping}
                alt="Add tipping times"
              ></img>
            </Col>
            <Col>
              <img
                className="portfolio-img"
                src={confirmTipping}
                alt="Confirm tipping times"
              ></img>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Crops;
