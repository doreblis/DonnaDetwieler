import * as pages from './pages'

export default function Content(state) {
    return `

    <main>
    <p> ${pages[state.pageContent](state)} </p>
    <div>

    </div>
    </main>
`;
}