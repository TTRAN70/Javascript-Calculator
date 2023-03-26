import React from "react";
import "./style.css";
import Calculator from "./Calculator.js";
import ReactFCCtest from 'react-fcctest';

export default function App() {
  return (
    <div className="mainwrap">
      <ReactFCCtest />
      <Calculator />
    </div>
  );
}
