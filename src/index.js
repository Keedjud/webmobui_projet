import './elements/artistCover.js'
import './elements/songItem.js'
import { afficherSectionArtistes } from './artistes.js'
import { afficherSectionMusiques } from './musiques.js'

const artistList = document.querySelector('.artist-list')

afficherSectionArtistes()

const hashSplite = window.location.hash.split('/')
switch (hashSplite[0]) {
    case '':
        afficherHome()
        break;

    case '#artists':
        if (hashSplite[1]) {
            afficherSectionMusiques(hashSplite[1])
        }
        else {
            afficherSectionArtistes()
        }
        break;

    case '#player':

        break;

    case '#favorites':

        break;
}

artistList.addEventListener('click', (event) => {
    const artistCover = event.target.closest('artist-cover')
    if (artistCover) {
        const artistId = artistCover.getAttribute('id')
        const artistNom = artistCover.getAttribute('name')

        afficherSectionMusiques(artistId, artistNom)
    }
})
