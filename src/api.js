function fetchJson(url) {
    return fetch(url)
        .then((response) => response.json())
}

function getArtists() {
    return fetchJson('https://webmob-ui-22-spotlified.herokuapp.com/api/artists')
}

function getSongs(id) {
    return fetchJson(`https://webmob-ui-22-spotlified.herokuapp.com/api/artists/${id}/songs`)
}

export { getArtists, getSongs }
