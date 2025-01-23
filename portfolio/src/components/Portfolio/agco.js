import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import alertsView from "./img/alerts-view.png";
import changeStatus from "./img/change-alert-status.png";
import alertInfo from "./img/mob-alert-info.png";

const Agco = () => {
  return (
    <>
      <Container className="cv-container">
        <div className="cv-item">
          <p className="cv-item-text">
            Agco Corporation on yksi maailman johtavista traktoreiden ja
            maatalouskoneiden valmistajista. Agco Connect on työkalu, jonka
            avulla viljelijät ja huoltohenkilökunta voi seurata koneiden
            tuottamaa dataa (mm. sijainti, polttoaineen kulutus, koneen kunto)
            reaaliaikaisesti. Connect-projektissa toimin UX-suunnittelijana,
            Scrum Masterina ja front end -kehittäjänä.
          </p>
          <p className="cv-item-text">
            <a href="https://www.cinia.fi/referenssit/toiminnan-ennakoitavuutta-agcon-raskaan-kaluston-iot-ratkaisulla">
              Cinia.fi: Toiminnan ennakoitavuutta ja optimointia AGCOn raskaan
              kaluston IoT-ratkaisulla
            </a>
          </p>
          <p className="cv-item-text">
            <a href="https://get.agcoconnect.com/">get.agcoconnect.com</a>
          </p>
          <p className="cv-item-header cv-prof-title">HAASTE</p>
          <p className="cv-item-text">
            Koneiden lähettämästä datasta pystytään ennakoimaan konerikkoja.
            Näitä halutaan ehkäistä lähettämällä huoltohenkilökunnalle
            hälytyksiä, kun jokin asiakkaan kone on vaarassa vikaantua.
          </p>
          <p className="cv-item-header cv-prof-title">RATKAISU</p>
          <p className="cv-item-text">
            Luotiin käyttöliittymä, jonka kautta huoltohenkilökunta voi seurata
            ja ottaa käsittelyyn konerikkoja ennakoivia hälytyksiä.
            Käyttöliittymä näyttää mitä laitetta hälytys koskee ja mikä osa
            siitä on vaarassa vikaantua. Huoltohenkilö voi ottaa yhteyttä
            asiakkaaseen ja sopia huoltokäynnistä, ladata korjausohjeet ja
            lopksi kuitata hälytyksen valmiiksi sovelluksen kautta.
          </p>
          <Row className="portfolio-img-row">
            <Col>
          <img
            className="portrait-img"
            src={alertsView}
            alt="alerts view"
          ></img></Col>
          <Col>
          <img
            className="portrait-img"
            src={alertInfo}
            alt="alert info"
          ></img></Col>
          <Col>
          <img
            className="portrait-img"
            src={changeStatus}
            alt="change alert status"
          ></img></Col>
          </Row>
       
        </div>
      </Container>
    </>
  );
};

export default Agco;
