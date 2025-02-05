import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import vesselEmissions from "./img/vessel-emissions.png";
import vesselsList from "./img/vessels-list.png";
import addPortcall from "./img/add-portcall-modals.png";

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
          <p className="cv-item-header cv-prof-title">The Challenge</p>
          <p className="cv-item-text">
            The company wanted to offer its customers a way to track the
            emissions and their environmental impacts of ports in a
            user-friendly format. The customer wanted the UI to reflect
            environmental values. The challenge was the multidimensionality of
            the data and its presentation in a clear and user-friendly way.
            {/* Yritys halusi tarjota asiakkailleen keinon seurata satamien päästöjä
            ja niistä kertyviä ympäristövaikutuksia käyttäjäystävällisessä
            formaatissa. Haasteena oli käsiteltävän datan moniulotteisuus ja sen
            esittäminen selkeästi ja käyttäjäystävällisesti.{" "}*/}
          </p>
          <p className="cv-item-header cv-prof-title">The Solution</p>
          <p className="cv-item-text">
            First look and feel of the application was designed. The customer
            had some UI elements already made for another application, so the
            new application was designed to match the existing elements. The
            green color theme was chosen to reflect environmental values. The
            data was divided into clear sections and the user can easily
            navigate between them. The designs were reviewed and iterated with
            the development team and customer throughout the process. Below
            there are some screenshots from the app. The customer was very
            pleased with the result.
          </p>
          <Row className="portfolio-img-port">
            <Col className="portfolio-img-column">
              <img
                className="portfolio-img"
                src={vesselsList}
                alt="Vessel list"
              ></img>
              <img
                className="portfolio-img-modals"
                src={addPortcall}
                alt="Add portcall"
              ></img>
            </Col>
            <Col className="portfolio-img-column">
              <img
                className="portfolio-img"
                src={vesselEmissions}
                alt="Emissions view"
              ></img>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Port;
