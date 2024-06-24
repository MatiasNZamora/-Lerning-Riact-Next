import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css';

const app = document.querySelector('#app');

// ReactDOM.render(<PrimeraApp />, app);
ReactDOM.render(<CounterApp value={10} />, app);
