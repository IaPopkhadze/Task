import React from "react";
import "./navigationStyle.css";
import { BiChevronDown } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import BackgroundImg from "../Assets/BackgroundImg.PNG";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import NavigationModal from "./NavigationModal";

function Navigation() {
  const [navigationModal, setNavigationModal] = useState(true);
  return (
    <div className="navigation">
      <nav className="hamburgerNavigation">
        <ul>
          <li onClick={() => setNavigationModal(true)}>
            <RxHamburgerMenu style={{ fontSize: "2rem" }} />
          </li>
          <li className="avtorization">ავტორიზაცია</li>
        </ul>
      </nav>
      {navigationModal ? <NavigationModal  setNavigationModal={setNavigationModal}/> : null}
      <nav className="desktopNavigation">
        <ul>
          <li className="empty"></li>
          <li>ბიზნესისთვის</li>
          <li>მძღოლებისთვის</li>
          <li>პროდუქტები</li>
          <li>კონტაქტი</li>
          <li className="fixPosition">
            {" "}
            <FiPhoneCall style={{ fontSize: "1.3rem" }} />{" "}
            <span>599 90 01 01</span>
          </li>
          <li className="avtorization">ავტორიზაცია</li>
          <li className="fixPosition " id="languages">
            <span>EN</span> <BiChevronDown style={{ fontSize: "1.5rem" }} />
          </li>
        </ul>
      </nav>
      <div className="background_image_container">
        <img className="background_image" src={BackgroundImg} alt="" />
      </div>
    </div>
  );
}

export default Navigation;
