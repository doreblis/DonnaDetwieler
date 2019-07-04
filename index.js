import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

import * as states from "./components/pages";


const root = document.querySelector("#root");


function render(stateY) {
  console.log("This is my state:", stateY)
    root.innerHTML = `
      ${Navigation(stateY)}
      ${Header(stateY)}
      ${Content(stateY)}
      ${Footer(stateY)}
    `;
  }

  render(states);


//look for click events on nav bar
let links = document.querySelectorAll('nav li > a')
  .forEach((link) => link.addEventListener('click', (event) => {

    //override default behavior
    event.preventDefault();
    console.log("event", event);
  })
);

//upon clicking, we need to know what we clicked on and match that to its resepctive page content to be displayed

