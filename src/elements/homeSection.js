class HomeSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        console.log('render home')
        this.id = 'home-section'
        this.innerHTML = `
        <h1 class="hero">Bienvenue</h1>
        <h4>Playlists</h4>`
    }
}
customElements.define('home-section', HomeSection)
