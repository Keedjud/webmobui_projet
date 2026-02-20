import { chargerArtistes } from './api.js'

const container = document.querySelector('.artist-list')

function afficherUnArtiste(artiste) {
    container.innerHTML += `
    <a href="#${artiste.id}">
          <img src="${artiste.image_url}" />
          <div class="artist-list-item-title">${artiste.name}</div>
    </a>`
}

function afficherArtistes(artistes) {
    container.innerHTML = ''
    artistes.forEach(afficherUnArtiste)
}

function afficherSectionArtistes() {
    chargerArtistes()
        .then(afficherArtistes)
}

export { afficherSectionArtistes }
