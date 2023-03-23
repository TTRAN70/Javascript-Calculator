import React from "react";
import React, { useState, useEffect } from "react";
import "./Calculator.css";

export default function Calculator() {

  const[topDisplay, setTop] = useState("");
  const[currentDisplay, setCurrent] = useState("0");
  const[toggle, setToggle] = useState(true);

  const numberClick = (event) => {
    event.preventDefault()
    if (event.target.value == 0) {
      if (!(currentDisplay == "0")) {
        setCurrent(prev => prev + event.target.value);
      }
    }
    else {
        if (currentDisplay == "0") {
          setCurrent(prev => "");
        }
          setCurrent(prev => prev + event.target.value);
    }
  }

  const clear = () => {
    setCurrent("0");
    setToggle(true);
  }

  const decimate = () => {
    if(toggle) {
      setCurrent(prev => prev + ".");
      setToggle(false);
    }
  }

  const calculate = (event) => {
    event.preventDefault()
    
  }

  return (
    <div className="wrapper">
      <div className="top">{topDisplay}</div>
      <div className="bottom">{currentDisplay}</div>
      <div className="buttonContainer">
        <button onClick={() => clear()} className="ac" id="clear" value="AC">AC</button>
        <button onClick={e => calculate(e)} className="box" id="divide" value="/">/</button>
        <button onClick={e => numberClick(e)} className="box" id="seven" value="7">7</button>
        <button onClick={e => numberClick(e)} className="box" id="eight" value="8">8</button>
        <button onClick={e => numberClick(e)} className="box" id="nine" value="9">9</button>
        <button onClick={e => calculate(e)} className="box" id="multiply" value="*">X</button>
        <button onClick={e => numberClick(e)} className="box" id="four" value="4">4</button>
        <button onClick={e => numberClick(e)} className="box" id="five" value="5">5</button>
        <button onClick={e => numberClick(e)} className="box" id="six" value="6">6</button>
        <button onClick={e => calculate(e)} className="box" id="subtract" value="-">-</button>
        <button onClick={e => numberClick(e)} className="box" id="one" value="1">1</button>
        <button onClick={e => numberClick(e)} className="box" id="two" value="2">2</button>
        <button onClick={e => numberClick(e)} className="box" id="three" value="3">3</button>
        <button onClick={e => calculate(e)} className="box" id="add" value="+">+</button>
        <button onClick={e => numberClick(e)} className="zero" id="zero" value="0">0</button>
        <button onClick={() => decimate()} className="box" id="decimal" value=".">.</button>
        <button onClick={e => calculate(e)} className="box" id="equals" value="=">=</button>
      </div>
    </div>
  );
}