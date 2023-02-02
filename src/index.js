import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Apps from './Apps';
import All from './All';
import Calculator from "./Calculator";
import Card from "./Card";
import Netflix from "./Netflix";
import Copy from "./Copy";
import LoginForm from "./Form/LoginForm";

ReactDOM.render(
  <>
  
  <All/>
  <Apps/> 
  <Calculator/>  
  <Card/>  
  <Netflix />
  <Copy/>
  <LoginForm/>
  </>,
  document.getElementById("root")
);
