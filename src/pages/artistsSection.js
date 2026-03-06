import { getArtists } from "../api";

class ArtistsSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        this.id = 'artists-section'
        this.innerHTML = `
            <h4>Artistes</h4>
            <div class="artist-list"></div>`

        const container = this.querySelector('.artist-list')
        getArtists().then(afficherArtistes)

        function afficherArtistes(artistes) {
            artistes.forEach(afficherUnArtiste)
        }

        function afficherUnArtiste(artiste) {
            const element = document.createElement('artist-cover')
            element.setAttribute('id', artiste.id)
            element.setAttribute('name', artiste.name)
            element.setAttribute('image_url', artiste.image_url)
            container.append(element)
        }
    }
}
customElements.define('artists-section', ArtistsSection)
