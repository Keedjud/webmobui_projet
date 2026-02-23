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
    }
}
customElements.define('artists-section', ArtistsSection)
