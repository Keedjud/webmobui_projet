const container = document.querySelector('main')

function afficherHome() {
    const element = document.createElement('home-section')
    container.append(element)
    console.log('home')
}

export { afficherHome }