import React from "react";
import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {

  const[topDisplay, setTop] = useState("");
  const[currentDisplay, setCurrent] = useState("0");
  const[toggle, setToggle] = useState(true);
  const[calcToggle, setCalc] = useState(true);
  const[spamZero, setZero] = useState(true);
  const[neg, setNeg] = useState(true);
  const[equal, setEqual] = useState(false);

  const numberClick = (event) => {
    event.preventDefault()
    if (event.target.value == 0) {
      if (equal) {
        setTop(prev => "");
        setCurrent(prev => "");
        setEqual(false);
        setZero(false);
      }
      if (currentDisplay == "0" && spamZero) {
        setTop(prev => prev + event.target.value);
        setZero(false);
      }
      if (!calcToggle) {
        setCurrent(prev => "");
        setCalc(true);
        setNeg(true);
      }
      if (!(currentDisplay == "0")) {
        setCurrent(prev => prev + event.target.value);
        setTop(prev => prev + event.target.value);
      }
    }
    else {
        if (equal) {
          setTop(prev => "");
          setCurrent(prev => "");
          setEqual(false);
        }
        if (currentDisplay == "0" && spamZero) {
          setCurrent(prev => "");
          setTop(prev => "");
        }
        if (!calcToggle) {
          setCurrent(prev => "");
          setCalc(true);
          setNeg(true);
        }
        if (currentDisplay == "0" && topDisplay.substring(topDisplay.length-1, topDisplay.length) == "0") {
          setTop(prev => prev.replace(/.$/, ""));
          setCurrent(prev => "");
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
    setZero(true);
    setNeg(true);
    setEqual(false);
  }

  const decimate = () => {
    if (equal) {
      setTop(prev => "");
      setCurrent(prev => "");
      setEqual(false);
    }
    if (toggle && currentDisplay == "0" && topDisplay == "") {
      setTop(prev => prev + "0");
    }
    if(toggle && isNaN(currentDisplay)) {
      setCurrent(prev => "0");
      setTop(prev => prev + "0");
    }
    if(toggle) {
      setCurrent(prev => prev + ".");
      setTop(prev => prev + ".");
      setToggle(false);
      setCalc(true);
      setNeg(true);
    }
  }

  const calculate = (event) => {
    event.preventDefault()
    if (!(topDisplay == "" && currentDisplay == "0")) {
      if(calcToggle) {
        if(equal) {
          setTop(prev => currentDisplay.substring(1, currentDisplay.length) + event.target.value);
          setEqual(false);
        }
        else {
          setTop(prev => prev + event.target.value);
        }
        setCurrent(event.target.value);
        setCalc(false);
        setToggle(true);
        setZero(false);
      }
      else if (neg) {
        if(event.target.value == "-") {
          if(!(topDisplay.substring(topDisplay.length-1, topDisplay.length) == "-")) {
            setCurrent(event.target.value);
            setTop(prev => prev + event.target.value);
          }
        }
        else {
          if (topDisplay.substring(topDisplay.length-1, topDisplay.length) == "-") {
            if (isNaN(topDisplay.substring(topDisplay.length-2, topDisplay.length-1))) {
              setCurrent(event.target.value);
              setTop(prev => prev.substring(0, prev.length-1));
              setTop(prev => prev.replace(/.$/, event.target.value));
            }
            else {
              setCurrent(event.target.value);
              setTop(prev => prev.replace(/.$/, event.target.value));
            }
          }
          else {
            setCurrent(event.target.value);
            setTop(prev => prev.replace(/.$/, event.target.value));
          }
        }
      }
    }
    else if (event.target.value == "-") {
      setCurrent(event.target.value);
      setTop(event.target.value);
      setCalc(false);
      setToggle(true);
      setZero(false);
      setNeg(false);
    }
  }

  const evaluate = () => {
    if (!(topDisplay == "") && !(topDisplay == "-") && !(isNaN(topDisplay.substring(topDisplay.length-1, topDisplay.length)))) {
      const format = topDisplay.replaceAll("X", "*");
      const calc = eval(format);
      if(Number.isInteger(calc)) {
        setCurrent(prev => "= " + calc);
      }
      else {
        setCurrent(prev => "= " + calc.toFixed(5));
      }
      setEqual(true);
    }
  }

  return (
    <div className="wrapper">
      <div className="displayWrapper">
      <div className="top">{topDisplay}</div>
      <div className="bottom">{currentDisplay}</div>
      </div>
      <div className="buttonContainer">
        <button onClick={() => clear()} className="ac press" id="clear" value="AC">AC</button>
        <button onClick={e => calculate(e)} className="box press" id="divide" value="/">/</button>
        <button onClick={e => numberClick(e)} className="box press" id="seven" value="7">7</button>
        <button onClick={e => numberClick(e)} className="box press" id="eight" value="8">8</button>
        <button onClick={e => numberClick(e)} className="box press" id="nine" value="9">9</button>
        <button onClick={e => calculate(e)} className="box press" id="multiply" value="X">X</button>
        <button onClick={e => numberClick(e)} className="box press" id="four" value="4">4</button>
        <button onClick={e => numberClick(e)} className="box press" id="five" value="5">5</button>
        <button onClick={e => numberClick(e)} className="box press" id="six" value="6">6</button>
        <button onClick={e => calculate(e)} className="box press" id="subtract" value="-">-</button>
        <button onClick={e => numberClick(e)} className="box press" id="one" value="1">1</button>
        <button onClick={e => numberClick(e)} className="box press" id="two" value="2">2</button>
        <button onClick={e => numberClick(e)} className="box press" id="three" value="3">3</button>
        <button onClick={e => calculate(e)} className="box press" id="add" value="+">+</button>
        <button onClick={e => numberClick(e)} className="zero press" id="zero" value="0">0</button>
        <button onClick={() => decimate()} className="box press" id="decimal" value=".">.</button>
        <button onClick={() => evaluate()} className="box press" id="equals" value="=">=</button>
      </div>
    </div>
  );
}