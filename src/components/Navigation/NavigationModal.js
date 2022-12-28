import React from "react";
import "./navigationStyle.css";
import { FiPhoneCall } from "react-icons/fi";
import {MdClose} from "react-icons/md"

function NavigationModal({setNavigationModal}) {
  return (
    <div className="navigationModal">
        <div className="close_btn"></div>
      <nav>
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
        </ul>
      </nav>
     <div className="close_btn" onClick={()=>setNavigationModal(false)}> <MdClose/></div>
    </div>
  );
}

export default NavigationModal;
