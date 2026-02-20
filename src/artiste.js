import { chargerListeMusiques } from './api.js'

const container = document.querySelector('#list-section .list')
const nomArtiste = document.querySelector('#list-section h4')

function AfficherrNomArtiste(id) {
    nomArtiste.innerText = `Artistes > ${id}`
}

function afficherUneMusique(musique) {
    const element = document.createElement('song-item')
    element.setAttribute('id', musique.id)
    element.setAttribute('title', musique.title)
    container.append(element)
}  

function afficherMusiques(musiques) {
    container.innerHTML = ''
    musiques.forEach(afficherUneMusique)
}

function afficherSectionMusiques(id = 1, nom = 'Alan Walker') {
    AfficherrNomArtiste(nom)
    chargerListeMusiques(id)
        .then(afficherMusiques)
}

export { afficherSectionMusiques }
