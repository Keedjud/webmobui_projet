import { getSongs } from "../api";

class ArtistSongsSection extends HTMLElement {
    static observedAttributes = ['artist_id']

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
        getSongs(this.getAttribute('artist_id')).then(afficherMusiques)

        function afficherMusiques(musiques) {
            musiques.forEach(afficherUneMusique)
            title.textContent = `Artistes > ${musiques[0].artist.name}`
        }

        function afficherUneMusique(musique) {
            const element = document.createElement('song-item')
            element.addEventListener('click', () => { console.log("Test") })
            element.setAttribute('id', musique.id)
            element.setAttribute('title', musique.title)
            container.append(element)
        }
    }
}
customElements.define('artist-songs-section', ArtistSongsSection)
