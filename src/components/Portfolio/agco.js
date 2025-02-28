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
            Agco Corporation is one of the world's leading manufacturers of
            tractors and of agricultural machinery. Agco Connect is a tool that
            allows farmers and maintenance staff to monitor the machines data
            generated (e.g. location, fuel consumption, machine condition) in
            real time. In the Connect project I worked as a UX designer, Scrum
            Master and front end developer. Below is a description of one of the
            many features I designed in the project. I also got to implement
            some of them myself.
          </p>
          <p className="cv-item-text">
            <a href="https://www.cinia.fi/referenssit/toiminnan-ennakoitavuutta-agcon-raskaan-kaluston-iot-ratkaisulla">
              More about the project at Cinia.fi
            </a>
          </p>
          <p className="cv-item-text">
            <a href="https://get.agcoconnect.com/">
              Product website get.agcoconnect.com
            </a>
          </p>
          <p className="cv-item-header cv-prof-title">The Challenge</p>
          <p className="cv-item-text">
            From the data sent by the machines, it is possible to predict
            machine failures. Customer wanted to prevent these by sending alerts
            to the maintenance staff when a customer's machine is in danger of
            breaking down. <br></br> The challenge of the feature was the large
            amount of data contained in one alert, its presentation and
            prioritization on a mobile screen. The user should be able to see at
            a glance the general situation of the alerts; which are the most
            urgent and require immediate action.
            {/* Koneiden lähettämästä datasta pystytään ennakoimaan konerikkoja.
            Näitä halutaan ehkäistä lähettämällä huoltohenkilökunnalle
            hälytyksiä, kun jokin asiakkaan kone on vaarassa vikaantua.
            
            Ominaisuuden suunnittelussa haasteena oli yhden hälytyksen sisältämän 
            datan suuri määrä, sen esittäminen ja priorisointi mobiilinäytöllä. 
            Käyttäjän tuli pystyä näkemään yhdellä silmäyksellä hälytysten yleistilanne; 
            mitkä ovat kiireisimpiä ja vaativat toimenpiteitä heti.*/}
          </p>
          <p className="cv-item-header cv-prof-title">The Solution</p>
          <p className="cv-item-text">
            I designed in collaboration with the development team a user
            interface through which the maintenance staff can monitor and handle
            machine's proactive alerts. The user interface shows which
            device the alert concerns and which part there is a risk of failure.
            The maintenance person can contact the customer and agree on
            a maintenance visit, download repair instructions and finally, set
            the alert resolved through the application.
            {/* Suunnittelin yhteistyössä kehitystiimin kanssa käyttöliittymän, 
            jonka kautta huoltohenkilökunta voi seurata
            ja ottaa käsittelyyn konerikkoja ennakoivia hälytyksiä.
            Käyttöliittymä näyttää mitä laitetta hälytys koskee ja mikä osa
            siitä on vaarassa vikaantua. Huoltohenkilö voi ottaa yhteyttä
            asiakkaaseen ja sopia huoltokäynnistä, ladata korjausohjeet ja
            lopksi kuitata hälytyksen valmiiksi sovelluksen kautta.*/}
          </p>
          <Row className="portfolio-img-agco">
            <Col className="portfolio-img-column">
              <img
                className="portfolio-img"
                src={alertsView}
                alt="alerts view"
              ></img>
            </Col>
            <Col className="portfolio-img-column">
              <img
                className="portfolio-img"
                src={alertInfo}
                alt="alert info"
              ></img>
            </Col>
            <Col className="portfolio-img-column">
              <img
                className="portfolio-img"
                src={changeStatus}
                alt="change alert status"
              ></img>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Agco;
