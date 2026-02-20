import { chargerArtistes } from './api.js'

const container = document.querySelector('.artist-list')

function afficherUnArtiste(artiste) {
    const element = document.createElement('artist-cover')
    element.setAttribute('id', artiste.id)
    element.setAttribute('name', artiste.name)
    element.setAttribute('image_url', artiste.image_url)
    container.append(element)
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
