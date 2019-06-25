import Navigation from "./components/Navigation.js";
import Blog from "./components/Blog.js";
import Project from "./components/Project.js";
import Contact from "./components/Contact.js";

document.querySelector("#nav").innerHTML = `
${Navigation}`;

document.querySelector("#root").innerHTML = `

${Blog}
${Contact}
${Project}
`;

