class HomeSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        this.id = 'home-section'
        this.innerHTML = `
        <h1 class="hero">Bienvenue</h1>
        <h4>Playlists</h4>`
    }
}
customElements.define('home-section', HomeSection)
