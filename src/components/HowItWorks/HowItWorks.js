import React from "react";
import "./howItWorks.css";
import Calculation from "./Calculation/Calculation";
import ConsumptionProcess from "./ConsumptionProcess/ConsumptionProcess";
import InformationInLive from "./InformationInLive/InformationInLive";
import Functionality from "./Functionality/Functionality";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
function HowItWorks() {
  const [navbarActivation, setNavbarActivation] = useState("functionality");
  return (
    <div className="howItWorks">
      <h1>როგორ მუშაობს</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <Link
              onClick={() => setNavbarActivation("functionality")}
              id={
                navbarActivation === "functionality" ? "navbarActivation" : null
              }
              style={{ borderRight: "none" }}
              className="listItem"
              to="/"
            >
              მოწყობილობები <br /> და ფუნქციონალი
            </Link>
            <Link
              onClick={() => setNavbarActivation("consumptionProcess")}
              id={
                navbarActivation === "consumptionProcess"
                  ? "navbarActivation"
                  : null
              }
              style={{ borderRight: "none" }}
              className="listItem"
              to="/consumptionProcess"
            >
              მოხმარების <br /> პროცესი
            </Link>
            <Link
              onClick={() => setNavbarActivation("informationInLive")}
              id={
                navbarActivation === "informationInLive"
                  ? "navbarActivation"
                  : null
              }
              style={{ borderRight: "none" }}
              className="listItem"
              to="/informationInLive"
            >
              {" "}
              ინფორმაცია <br /> ცოცხალ რეჟიმში
            </Link>
            <Link
              onClick={() => setNavbarActivation("calculate")}
              id={navbarActivation === "calculate" ? "navbarActivation" : null}
              className="listItem"
              to="/calculate"
            >
              გამოთვალე
            </Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Functionality />} />
          <Route path="/consumptionProcess" element={<ConsumptionProcess />} />
          <Route path="/informationInLive" element={<InformationInLive />} />
          <Route path="/calculate" element={<Calculation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default HowItWorks;
