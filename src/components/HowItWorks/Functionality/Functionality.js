import React from "react";
import "./functionality.css";
import Data from "../../Data/Data";
import FunctionalityImage from "../../Assets/functionalityImg.PNG";
import { HiOutlineCheck } from "react-icons/hi";
function Functionality() {
  return (
    <div className="functionality">
      <div className="left_side">
        <img className="image" src={FunctionalityImage} alt="" />
      </div>
      <div className="right_side">
        <p className="text">
          CarX - არის საგადამხდელო და კონტროლის სისტემა თვითმომსახურების
          სამრეცხაოებისთვის. მისი საშუალებით თვითმომსახურების სამრეცხაოებს
          შეუძლიათ:
        </p>
        {Data.map((element, index) => {
          return (
            <p className="eachText" key={index}>
              {" "}
              <HiOutlineCheck /> {element.text}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Functionality;
