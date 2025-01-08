import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Navigation from "./Navigation";
import About from "./About";
import Cv from "./Cv";
import Portfolio from "./Portfolio";
import NotFound from "./NotFound";

const Root = () => {
  return (
    <>
     <Router>
     <Navigation/>
      <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/cv" element={<Cv />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Router>
    </>
  );
};

export default Root;
