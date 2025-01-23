import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Port = () => {
  return (
    <>
      <Container className="cv-container">
        <div className="cv-item">
          <p className="cv-item-text">
            'Case Port' -projektissa kehitettiin yhteistyössä asiakkaan ja
            kehitystiimin kanssa kokonaan uusi sovellus, joka kerää ja esittää
            tietoa satamien tuottamista päästöistä ja niiden
            ympäristövaikutuksista. Toimin projektissa UX/UI-suunnittelijana.
          </p>
          <p className="cv-item-header cv-prof-title">HAASTE</p>
          <p className="cv-item-text">
            Yritys halusi tarjota asiakkailleen keinon seurata satamien päästöjä
            ja niistä kertyviä ympäristövaikutuksia käyttäjäystävällisessä
            formaatissa. Haasteena oli käsiteltävän datan moniulotteisuus ja sen
            esittäminen selkeästi ja käyttäjäystävällisesti.{" "}
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

export default Port;
