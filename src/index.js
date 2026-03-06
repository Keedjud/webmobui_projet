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

window.addEventListener("hashchange", router)

router()
