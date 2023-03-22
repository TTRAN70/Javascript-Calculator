import React from "react";
import React, { useState, useEffect } from "react";
import "./Calculator.css";

export default function Calculator() {

  const[currentDisplay, setCurrent] = useState("0");
  const[topDisplay, setTop] = useState("");

  return (
    <div className="wrapper">
      <div className="top">{topDisplay}</div>
      <div className="bottom">{currentDisplay}</div>
      <div className="buttonContainer">
        <button className="ac" id="clear" value="AC">AC</button>
        <button className="box" id="divide" value="/">/</button>
        <button className="box" id="seven" value="7">7</button>
        <button className="box" id="eight" value="8">8</button>
        <button className="box" id="nine" value="9">9</button>
        <button className="box" id="multiply" value="*">X</button>
        <button className="box" id="four" value="4">4</button>
        <button className="box" id="five" value="5">5</button>
        <button className="box" id="six" value="6">6</button>
        <button className="box" id="subtract" value="-">-</button>
        <button className="box" id="one" value="1">1</button>
        <button className="box" id="two" value="2">2</button>
        <button className="box" id="three" value="3">3</button>
        <button className="box" id="add" value="+">+</button>
        <button className="zero" id="zero" value="0">0</button>
        <button className="box" id="decimal" value=".">.</button>
        <button className="box" id="equals" value="=">=</button>
      </div>
    </div>
  );
}