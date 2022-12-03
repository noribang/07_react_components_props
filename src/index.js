import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// write JSX to create an element that has the following properties:
//   - a <ul> element with an id of about-me
//   - inside the unordered list, three <li> elements with a class of about-me-item that display text about this user

const user = {
  name: "Ian",
  position: "Lead Instructor",
  hometown: "Suttons Bay, MI"
}

function liUser(user) {
  return (
    <li className="about-me-item">{user}</li>
  )
}

const element = (
  <div>
    <ul id="about-me">
      {liUser(user.name)}
      {liUser(user.position)}
      {liUser(user.hometown)}
    </ul>
  </div>
)

// const element = (
//   <div>
//     <ul id="about-me">
//       <li className="about-me-item">{user.name}</li>
//       <li className="about-me-item">{user.position}</li>
//       <li className="about-me-item">{user.hometown}</li>
//     </ul>
//   </div>
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  element
  // <h1>Eat your fries!!!</h1>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
