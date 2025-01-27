import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Port = () => {
  return (
    <>
      <Container className="cv-container">
        <div className="cv-item">
          <p className="cv-item-text">
            In project 'Case Port', a completely new application was developed
            in collaboration with the customer and the development team, which
            collects and presents information on emissions produced by ports and
            their environmental impacts. I worked as a UX/UI designer in the
            project.
            {/*'Case Port' -projektissa kehitettiin yhteistyössä asiakkaan ja
            kehitystiimin kanssa kokonaan uusi sovellus, joka kerää ja esittää
            tietoa satamien tuottamista päästöistä ja niiden
            ympäristövaikutuksista. Toimin projektissa UX/UI-suunnittelijana.*/}
          </p>
          <p className="cv-item-header cv-prof-title">CHALLENGE</p>
          <p className="cv-item-text">
            The company wanted to offer its customers a way to track the
            emissions of ports and their environmental impacts in a
            user-friendly format. The challenge was the multidimensionality of
            the data and its presentation in a clear and user-friendly way.
            {/* Yritys halusi tarjota asiakkailleen keinon seurata satamien päästöjä
            ja niistä kertyviä ympäristövaikutuksia käyttäjäystävällisessä
            formaatissa. Haasteena oli käsiteltävän datan moniulotteisuus ja sen
            esittäminen selkeästi ja käyttäjäystävällisesti.{" "}*/}
          </p>
          <p className="cv-item-header cv-prof-title">SOLUTION</p>
          <p className="cv-item-text">
            Mitä ja miten tehty, jotain design jargonia ja kuvia
          </p>
        </div>
      </Container>
    </>
  );
};

export default Port;
