import { searchSongs } from "../api";

class SearchSongsSection extends HTMLElement {
    static observedAttributes = ['query']

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        this.id = 'list-section'
        this.innerHTML = `
            <h4></h4>
            <div class="list"></div>`

        const container = this.querySelector('.list')
        const title = this.querySelector('h4')
        const query = encodeURIComponent(this.getAttribute('query'))
        searchSongs(query).then(afficherMusiques)

        function afficherMusiques(musiques) {
            musiques.forEach(afficherUneMusique)
            title.textContent = `Résultat de la recherche pour "${query}"`
        }

        function afficherUneMusique(musique) {
            const element = document.createElement('song-item')
            element.setAttribute('id', musique.id)
            element.setAttribute('title', musique.title)
            container.append(element)
        }
    }
}
customElements.define('search-songs-section', SearchSongsSection)
