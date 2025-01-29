import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Checkmark = () => {
  return (
    <>
      <Container className="cv-container">
        <div className="cv-item">
          <p className="cv-item-text">
            Checkmark is Finland's leading manufacturer of checkouts and
            checkout-area equipmen. Its products are delivered to Finland and
            Northern Europe. My team developed a new IoT-based service concept
            for Checkmark using service design methods. I worked as a service
            designer in the project.
            {/* Checkmark on Suomen johtava kassapöytien, kassa-aluekalusteiden sekä
            myymäläporttien ja -kaidejärjestelmien valmistaja. Sen tuotteita
            toimitetaan Suomen lisäksi Baltiaan ja muualle Eurooppaan.
            Checkmarkille kehitettiin uusi, IoT-teknologiaan perustuva
            palvelukonsepti palvelumuotoilun keinoin. Toimin projektissa
            palvelumuotoilijana.*/}
          </p>
          <p className="cv-item-text">
            <a href="https://www.cinia.fi/referenssit/checkmark">
              Cinia.fi: Asiakaskeskeisyys on IoT-pohjaisen palvelukonseptin
              lähtökohta
            </a>
          </p>
          <p className="cv-item-header cv-prof-title">THE CHALLENGE</p>
          <p className="cv-item-text">
            The customer wanted to develop a maintenance system based on IoT
            that would streamline maintenance of devices and prevent device
            breakdowns.
            {/* Asiakas halusi kehittää IoT-teknologiaan perustuvan
            huoltojärjestelmän, jonka avulla sujuvoitettaisiin laitteiden
            huoltoja ja ennaltaehkäistäisiin laiterikkoja.*/}
          </p>
          <p className="cv-item-header cv-prof-title">THE SOLUTION</p>
          <p className="cv-item-text">
            Mitä ja miten tehty, jotain design jargonia ja kuvia
          </p>
        </div>
      </Container>
    </>
  );
};

export default Checkmark;
