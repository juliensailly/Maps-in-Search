function main() {
    const interval = setInterval(() => {
        const searchStats = document.querySelector('#result-stats')
        if (searchStats) {
            clearInterval(interval);
            AddMapsButton(searchStats);
        }
    })
    setTimeout(() => {
        clearInterval(interval);
    }, 5000);
}

function AddMapsButton(searchStats) {
    searchStats.innerHTML += '- <a href="https://www.google.com/maps?q=' + window.location.href.split('q=')[1].split('&')[0] + '&shorturl=1" id="mapsButton">Rechercher sur Maps</a>';
}

main();