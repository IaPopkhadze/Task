import React from "react";
import "./calculate.css";
import { useState } from "react";
function Calculation() {
  const [itemAmount, setItemAmount] = useState(0);

  const listItems = [
    {
      id: 1,
      title: "ბოქსების რაოდენობა",
      amount: 1,
      price: 5,
    },
    { id: 2, title: "ბარათი", amount: 1, price: 10 },
    { id: 3, title: "ბრელოკი", amount: 1, price: 20 },
  ];
  const [items, setItems] = useState(listItems);
  const handleDecrease = (id) => {
    const findItem = items.map((element) =>
      element.id === id && element.amount > 1
        ? { ...element, amount: element.amount - 1 }
        : element
    );
    setItems(findItem);
    console.log(findItem);
  };

  const handleIncrease = (id) => {
    const findItem = items.map((element) =>
      element.id === id ? { ...element, amount: element.amount + 1 } : element
    );
    setItems(findItem);
    console.log(findItem);
  };
  return (
    <div className="calculation">
      {items.map((element) => {
        return (
          <div key={element.id} className="box_content">
            <p className="txt">{element.title}</p>
            <div className="amount_container">
              <button
                className="decrease"
                onClick={() => handleDecrease(element.id)}
              >
                -
              </button>
              <span className="amount">{element.amount}</span>
              <button
                className="increase"
                onClick={() => handleIncrease(element.id)}
              >
                +
              </button>
            </div>
          </div>
        );
      })}
      <div className="information">
        ინფორმაცია ცოცხალ რეჟიმში:{" "}
        <input type="checkBox" style={{ border: "0" }} />
      </div>
      <div className="totalAmount">
        ჯამური ფასი:{" "}
        <span style={{ fontSize: "1.5rem" }}>
          {items.reduce(
            (first, second) => first + second.amount * second.price,
            0
          )} {" "} ლარი
        </span>
      </div>
    </div>
  );
}

export default Calculation;
