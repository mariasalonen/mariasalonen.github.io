import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Checkmark = () => {
  return (
    <>
      <Container className="cv-container">
        <div className="cv-item">
          <p className="cv-item-text">
            Checkmark on Suomen johtava kassapöytien, kassa-aluekalusteiden sekä
            myymäläporttien ja -kaidejärjestelmien valmistaja. Sen tuotteita
            toimitetaan Suomen lisäksi Baltiaan ja muualle Eurooppaan.
            Checkmarkille kehitettiin uusi, IoT-teknologiaan perustuva
            palvelukonsepti palvelumuotoilun keinoin. Toimin projektissa
            palvelumuotoilijana.
          </p>
          <p className="cv-item-text">
            <a href="https://www.cinia.fi/referenssit/checkmark">
              Cinia.fi: Asiakaskeskeisyys on IoT-pohjaisen palvelukonseptin
              lähtökohta
            </a>
          </p>
          <p className="cv-item-header cv-prof-title">HAASTE</p>
          <p className="cv-item-text">
            Asiakas halusi kehittää IoT-teknologiaan perustuvan
            huoltojärjestelmän, jonka avulla sujuvoitettaisiin laitteiden
            huoltoja ja ennaltaehkäistäisiin laiterikkoja.
          </p>
          <p className="cv-item-header cv-prof-title">RATKAISU</p>
          <p className="cv-item-text">
            Mitä ja miten tehty, jotain design jargonia ja kuvia
          </p>
        </div>
      </Container>
    </>
  );
};

export default Checkmark;
