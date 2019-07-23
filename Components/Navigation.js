import { lowerCase } from 'lodash';

function buildLinks(linkArray) { 
    let link = "";
    let links = "";
    let x = 0;

    linkArray.forEach(link => {
        if (linkArray[x] !== "Home")
        {
            link = linkArray[x];
          }
      
      
          links += `
                  <p>
                      <a href='/${lowerCase(link)}' data-navigo>
                          ${linkArray[x]}
                      </a>
                  </p>
              `;
      
          x++;
        });
      
        return links;
      }

export default function Navigation(state){ return `

<nav id="nav">
<p>
    ${buildLinks(state.links)}
</p>

</nav>

<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-secondary">Home</button>
  <button type="button" class="btn btn-secondary">Middle</button>
  <button type="button" class="btn btn-secondary">Right</button>
</div>
`;
}
