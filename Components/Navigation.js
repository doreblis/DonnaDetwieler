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
                  <li>
                      <a href='/${lowerCase(link)}' data-navigo>
                          ${linkArray[x]}
                      </a>
                  </li>
              `;
      
          x++;
        });
      
        return links;
      }

export default function Navigation(state){ return `

<nav id="nav">
<ul>
    ${buildLinks(state.links)}
</ul>

</nav>
`;
}
