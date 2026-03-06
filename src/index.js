// Importation des éléments
import './elements/artistCover.js'
import './elements/songItem.js'
import './elements/spotFooter.js'

// Importation des pages
import './pages/homeSection.js'
import './pages/artistsSection.js'
import './pages/songsSection.js'

const main = document.querySelector('main')

const router = () => {
    const hashSplite = window.location.hash.split('/')
    switch (hashSplite[0]) {
        case '': case '#home':
            main.innerHTML = '<home-section/>'
            break;

        case '#artists':
            if (hashSplite[1]) {
                main.innerHTML = `<songs-section artist_id="${hashSplite[1]}"/>`
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
