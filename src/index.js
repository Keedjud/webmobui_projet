// Importation des éléments
import './elements/artistCover.js'
import './elements/songItem.js'
import './elements/spotFooter.js'
import './elements/searchBar.js'

// Importation des pages
import './pages/homeSection.js'
import './pages/artistsSection.js'
import './pages/playerSection.js'
import './pages/artistSongsSection.js'
import './pages/searchSongsSection.js'
import './pages/favoritesSongsSection.js'

import './player.js'
// import variables list et current

const main = document.querySelector('main')

const router = () => {
    const hashSplite = window.location.hash.split('/')
    switch (hashSplite[0]) {
        case '': case '#home':
            main.innerHTML = '<home-section/>'
            break;

        case '#artists':
            if (hashSplite[1]) {
                main.innerHTML = `<artist-songs-section artist_id="${hashSplite[1]}"/>`
            }
            else {
                main.innerHTML = '<artists-section/>'
            }
            break;
        
        case '#search':
            if (hashSplite[1]) {
                main.innerHTML = `<search-songs-section query="${hashSplite[1]}"/>`
            }
            break;

        case '#player':

            break;

        case '#favorites':

            break;
    }
}

window.addEventListener("hashchange", router)

router()
