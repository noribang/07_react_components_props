import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
//   );


const greeting = "Lunch time!!!"
const className = "App"
// JSX - JavaScript XML
// Babel transpiles JSX to JavaScript.
const element = <div>
                  <h1 id="header" className={className}>This is: {greeting}</h1>
                  <p className={className}>{1 + 1}</p>
                </div> 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  element
  // <h1>Eat your fries!!!</h1>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
