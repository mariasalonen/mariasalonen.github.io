import React from "react";
import { Container } from "react-bootstrap";

const Checkmark = () => {
  return (
    <>
      <Container className="cv-container">
        <div className="cv-item">
          <p className="cv-item-text">
            Checkmark is Finland's leading manufacturer of checkouts and
            checkout-area equipment. Its products are delivered to Finland and
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
          <p className="cv-item-header cv-prof-title">The Challenge</p>
          <p className="cv-item-text">
            The customer wanted to explore the hidden possibilities IoT could
            offer to their business and develop a maintenance system based on
            IoT that would streamline maintenance of devices and prevent device
            breakdowns.
            {/* Asiakas halusi kehittää IoT-teknologiaan perustuvan
            huoltojärjestelmän, jonka avulla sujuvoitettaisiin laitteiden
            huoltoja ja ennaltaehkäistäisiin laiterikkoja.*/}
          </p>
          <p className="cv-item-header cv-prof-title">The Solution</p>
          <p className="cv-item-text">
            The project followed a customer-centric approach, focusing on
            developing an IoT-enabled maintenance system to enhance service
            efficiency, streamline communication, and predict maintenance needs.
            To ensure a comprehensive understanding, the team conducted a
            strategic and business model analysis, examining IoT opportunities
            from multiple perspectives. A stakeholder survey provided valuable
            insights into internal expectations and challenges, while remote
            workshops facilitated cross-functional collaboration and systematic
            service journey analysis using digital tools like Mural. Through
            service blueprinting and thorough documentation, the project
            identified key improvement areas and ensured that all insights
            remained accessible for future development. <br></br><br></br>As a result, Checkmark
            gained a clear roadmap for implementing IoT solutions, along with a
            structured service concept that enhances both internal processes and
            technological advancements. The project also provided hands-on
            learning in service design and digitalization, equipping Checkmark
            with expert insights into IoT’s opportunities and limitations. With
            these outcomes, Checkmark now has a strong foundation to advance its
            IoT-driven business development with a clear, customer-first
            approach.
          </p>
        </div>
      </Container>
    </>
  );
};

export default Checkmark;
