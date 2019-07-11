import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";
import * as states from "./store";

import Navigo from "navigo";
import { capitalize } from 'lodash';

const router = new Navigo(window.location.origin);
const root = document.querySelector("#root");


router
  .on(":page", handleRoute)
  .on("/", () => render(states.Home))
  .resolve();

  function handleRoute(params) {
    const page = capitalize(params.page);
    render(states[page]);
  }

function render(state) {
    root.innerHTML = `
      ${Navigation(state)}
      ${Header(state)}
      ${Content(state)}
      ${Footer()}
    `;

  router.updatePageLinks() ;
}