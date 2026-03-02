import './elements/artistCover.js'
import './elements/songItem.js'
import './elements/homeSection.js'
import './elements/artistsSection.js'
import { afficherSectionMusiques } from './musiques.js'
import { chargerArtistes } from './api.js'

const main = document.querySelector('main')

const router = () => {
    const hashSplite = window.location.hash.split('/')
    switch (hashSplite[0]) {
        case '': case '#home':
            main.innerHTML = '<home-section/>'
            break;

        case '#artists':
            if (hashSplite[1]) {
                afficherSectionMusiques(hashSplite[1])
            }
            else {
                main.innerHTML = '<artists-section/>'
            }
            break;

        case '#player':

            break;

        case '#favorites':

            break;
    }
}

router()

window.addEventListener("hashchange", () => {
    router()
})



// const artistList = document.querySelector('.artist-list')
// artistList.addEventListener('click', (event) => {
//     const artistCover = event.target.closest('artist-cover')
//     if (artistCover) {
//         const artistId = artistCover.getAttribute('id')
//         const artistNom = artistCover.getAttribute('name')

//         afficherSectionMusiques(artistId, artistNom)
//     }
// })
