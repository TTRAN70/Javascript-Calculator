import React from "react";
import React, { useState, useEffect } from "react";
import "./Calculator.css";

export default function Calculator() {

  const[topDisplay, setTop] = useState("");
  const[currentDisplay, setCurrent] = useState("0");
  const[toggle, setToggle] = useState(true);
  const[calcToggle, setCalc] = useState(true);

  const numberClick = (event) => {
    event.preventDefault()
    if (event.target.value == 0) {
      if (!calcToggle) {
        setCurrent(prev => "");
        setCalc(true);
      }
      if (!(currentDisplay == "0")) {
        setCurrent(prev => prev + event.target.value);
        setTop(prev => prev + event.target.value);
      }
    }
    else {
        if (currentDisplay == "0") {
          setCurrent(prev => "");
          setTop(prev => "");
        }
        if (!calcToggle) {
          setCurrent(prev => "");
          setCalc(true);
        }
          setCurrent(prev => prev + event.target.value);
          setTop(prev => prev + event.target.value);
    }
  }

  const clear = () => {
    setTop("");
    setCurrent("0");
    setToggle(true);
    setCalc(true);
  }

  const decimate = () => {
    if(toggle) {
      setCurrent(prev => prev + ".");
      setTop(prev => prev + ".");
      setToggle(false);
      setCalc(true);
    }
  }

  const calculate = (event) => {
    event.preventDefault()
    if (!(topDisplay == "" && currentDisplay == "0")) {
      if(calcToggle) {
        setCurrent(event.target.value);
        setTop(prev => prev + event.target.value);
        setCalc(false);
        setToggle(true);
      }
      else {
        setCurrent(event.target.value);
        setTop(prev => prev.replace(/.$/, event.target.value));
      }
    }
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
        <button onClick={e => calculate(e)} className="box" id="multiply" value="X">X</button>
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