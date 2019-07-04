import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

//import * as pages from "./components/pages";


const root = document.querySelector("#root");

let stateX = {
  Header : {
    title : 'Header title'
  },
  Content : {
    title : 'Content title'
  },
  Footer : {
    title : 'Footer title'
  },
  Navigation : {
    title : 'Navigation title'
  }
};

function render(stateY) {
  console.log("This is my state:", stateY)
    root.innerHTML = `
      ${Navigation(stateY.Navigation)}
      ${Header(stateY.Header)}
      ${Content(stateY.Content)}
      ${Footer(stateY.Footer)}
    `;
  }

  render(stateX);


//look for click events on nav bar
let links = document.querySelectorAll('nav li > a')
  .forEach((link) => link.addEventListener('click', (event) => {

    //override default behavior
    event.preventDefault();
    console.log("event", event);
  })
);

//upon clicking, we need to know what we clicked on and match that to its resepctive page content to be displayed

