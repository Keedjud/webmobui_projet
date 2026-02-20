function fetchJson(url) {
    return fetch(url)
        .then((response) => response.json())
}

function chargerArtistes() {
    return fetchJson('https://webmob-ui-22-spotlified.herokuapp.com/api/artists')
}

function chargerListeMusiques(id) {
    return fetchJson(`https://webmob-ui-22-spotlified.herokuapp.com/api/artists/${id}/songs`)
}

export { chargerArtistes, chargerListeMusiques }
