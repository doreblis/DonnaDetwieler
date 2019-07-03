import Navigation from "./components/Navigation.js";
import Blog from "./components/Blog.js";
import Project from "./components/Project.js";
import Contact from "./components/Contact.js";


const home ={
    title: "Welcome to my page!"
};
const root = document.querySelector("#root");

function render(state) {
    root.innerHTML = `
      ${Navigation(state)}
      ${Blog(state)}
      ${Contact(state)}
      ${Project(state)}
    `;
  }

  render(home);


//document.querySelector("#nav").innerHTML = `
//${Navigation}`;

//document.querySelector("#root").innerHTML = `

//${Blog}
//${Contact}
//${Project}
//`;



