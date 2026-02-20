function fetchJson(url) {
    return fetch(url)
        .then((response) => response.json())
}

function chargerArtistes() {
    return fetchJson('https://webmob-ui-22-spotlified.herokuapp.com/api/artists')
}

export { chargerArtistes }
