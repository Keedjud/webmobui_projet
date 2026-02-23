class ArtistCover extends HTMLElement {
    static observedAttributes = ['id', 'name', 'image_url']

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <a href="#artists/${this.getAttribute('id')}">
            <img src="${this.getAttribute('image_url')}" />
            <div class="artist-list-item-title">${this.getAttribute('name')}</div>
        </a>`
    }
}
customElements.define('artist-cover', ArtistCover)
