document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('mymap').setView([51.338595395661414, 4.410704786243938], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        L.marker([51.338595395661414, 4.410704786243938]).addTo(map)
        .bindPopup('De Broertjes Kapellen')
        .openPopup();
});