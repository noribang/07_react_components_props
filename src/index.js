import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />
//   );

// Variables
const greeting = "Lunch time!!!"
const className = "App"
// Functions
function getColor(isRed) {
  if (isRed) {
    return "red"
  } else {
    return "blue"
  }
}

// JSX - JavaScript XML
// Babel transpiles JSX to JavaScript.
// const element = (<>
//                   <h1 id="header" className={className}>This is: {greeting}</h1>
//                   <p className={className}>{1 + 1}</p>
//                   <p className={className}>{getColor()}</p>
//                   <p className={className}>{getColor(true)}</p>
//                 </>) 
const element = (
  <div>
    {createCard()}
  </div>
)

// Function to render JSX
function createCard(  ) {
  return (
    <div className="card">
      <h1 id="header" className="blue">createCard</h1>
      <h2>Card subheading</h2>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  element
  // <h1>Eat your fries!!!</h1>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
