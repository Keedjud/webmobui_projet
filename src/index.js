import './elements.js'
import { afficherSectionArtistes } from './artistes.js'
import { afficherSectionMusiques } from './artiste.js'

const artistList = document.querySelector('.artist-list')

afficherSectionArtistes()

artistList.addEventListener('click', (event) => {
    const artistCover = event.target.closest('artist-cover')
    if (artistCover) {
        const artistId = artistCover.getAttribute('id')
        
        afficherSectionMusiques(artistId)
    }
})