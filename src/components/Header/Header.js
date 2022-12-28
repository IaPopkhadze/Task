import React from "react";
import "./headerStyle.css";
import Data from "../Data/Data";
import { HiOutlineCheck } from "react-icons/hi";
import OurTechnologiesImg from "../Assets/ourTechnologiesImg.PNG";
function Header() {
  return (
    <div className="header">
      <h1 className="title">ჩვენი ტექნოლოგია</h1>
      <div className="header_content">
         <div className="our_technologies">
        <div className="our_technologies_left_container">
          <p className="text">
            CarX - არის საგადამხდელო და კონტროლის სისტემა თვითმომსახურების
            სამრეცხაოებისთვის. მისი საშუალებით თვითმომსახურების სამრეცხაოებს
            შეუძლიათ:
          </p>
          {Data.map((element,index) => {
            return (
              <p className="eachText" key={index}>
                {" "}
                <HiOutlineCheck /> {element.text}
              </p>
            );
          })}
        </div>
        <div className="our_technologies_right_container">
          <div className="image_cont">
            <img src={OurTechnologiesImg} alt="" />
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default Header;
