import { getSongs } from "../api";
import SongsSection from "../songsSection";

class ArtistSongsSection extends SongsSection {
    static observedAttributes = ['artist_id']
    artist_id = this.getAttribute('artist_id')
    musiques = []

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    getTitle() {
        return `Artistes > ${this.musiques[0].artist.name}`
    }

    getSonglist() {
        return getSongs(this.artist_id).then(musiques => {
            this.musiques = musiques
            return musiques
        })
    }
}
customElements.define('artist-songs-section', ArtistSongsSection)
