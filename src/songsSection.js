class SongsSection extends HTMLElement {
    render() {
        this.id = 'list-section'
        this.innerHTML = `
            <h4></h4>
            <div class="list"></div>`

        const container = this.querySelector('.list')
        const title = this.querySelector('h4')
        this.getSonglist().then(afficherMusiques.bind(this))

        function afficherMusiques(musiques) {
            musiques.forEach(afficherUneMusique)
            title.textContent = this.getTitle()
        }

        function afficherUneMusique(musique) {
            const element = document.createElement('song-item')
            element.addEventListener('click', () => { console.log("Test") })
            element.setAttribute('id', musique.id)
            element.setAttribute('title', musique.title)
            container.append(element)
        }
    }

    getTitle() {
        return "fonction non définie"
    }

    getSonglist() {
        return "fonction non définie"
    }
}

export default SongsSection
