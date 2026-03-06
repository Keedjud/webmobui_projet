class SearchBar extends HTMLElement {
    static observedAttributes = []

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div id="search-wrapper">
            <!-- ajouter la classe "active" à #search-input pour l'afficher-->
            <input id="search-input" type="search" spellcheck="false" autocapitalize="false" autofocus />

            <button id="search-trigger" class="icon-button" type="button">
                <span class="material-icons">search</span>
            </button>
        </div>`
    }
}
customElements.define('search-bar', SearchBar)

const searchInput = document.querySelector('#search-input')
const searchTrigger = document.querySelector('#search-trigger')

searchTrigger.addEventListener('click', () => {
    searchInput.classList.toggle('active')
    if (searchInput.classList.contains('active')) {
        searchInput.focus()
    }
})

searchInput.addEventListener('change', (event) => {
    window.location.hash = `#search/${event.target.value}`
})
