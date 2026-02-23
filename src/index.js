import './elements/artistCover.js'
import './elements/songItem.js'
import { afficherSectionArtistes } from './artistes.js'
import { afficherSectionMusiques } from './artiste.js'

const artistList = document.querySelector('.artist-list')

afficherSectionArtistes()

// const hashSplité = window.location.hash.split(‘/‘)
// // si le premier élément est artiste, on est dans la gestion des artistes...
// switch (hashSplité[0]) {
//     case ‘#artists’:
//         // est-ce que le deuxième élément retourne quelque chose ? Et donc n’est pas undefined ? Oui? 
//         // Alors il y a un id et on affiche cet artiste
//         if (hashSplité[1]) {
//             afficherChansonsArtiste(hashSplité[1])
//         }
//         else {
//             afficherArtistes()
//         }
//         break;
//     case ‘#player’: 

//         break;
// }

artistList.addEventListener('click', (event) => {
    const artistCover = event.target.closest('artist-cover')
    if (artistCover) {
        const artistId = artistCover.getAttribute('id')
        const artistNom = artistCover.getAttribute('name')

        afficherSectionMusiques(artistId, artistNom)
    }
})