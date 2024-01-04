document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('ap-map').setView([51.230017470632085, 4.415291494152207], 15);
    var mytile = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
    
    L.marker({lat: 51.23023976499757, lon: 4.416275792514747}).addTo(map)
    .bindPopup('Campus Ellermanstraat')
    
    L.marker({lat: 51.23029028629452, lon: 4.4142265155960185}).addTo(map)
    .bindPopup('Campus Noorderplaats')
    
    L.marker({lat: 51.22997128562226, lon: 4.417750995575657}).addTo(map)
    .bindPopup('Campus Viaduct')
    
});

