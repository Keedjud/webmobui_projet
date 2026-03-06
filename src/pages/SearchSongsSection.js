import { searchSongs } from "../api";
import SongsSection from "../songsSection";

class SearchSongsSection extends SongsSection {
    static observedAttributes = ['query']
    query = encodeURIComponent(this.getAttribute('query'))

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    getTitle() {
        return `Résultat de la recherche pour "${this.query}"`
    }

    getSonglist() {
        return searchSongs(this.query).then(musiques => {
            this.musiques = musiques
            return musiques
        })
    }
}
customElements.define('search-songs-section', SearchSongsSection)
