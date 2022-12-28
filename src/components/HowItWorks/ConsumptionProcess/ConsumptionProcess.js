import React from "react";
import "./consumptionProcess.css";
import ConsumptionImg from "../../Assets/consumptionImg.PNG";
import Data from "../../Data/Data";
import { HiOutlineCheck } from "react-icons/hi";
function ConsumptionProcess() {
  return (
    <div className="ConsumptionProcess">
      <div className="left_side">
        <img className="image" src={ConsumptionImg} alt="" />
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

export default ConsumptionProcess;
