import leaflet from 'https://cdn.skypack.dev/leaflet';

var map = leaflet.L.map('map').setView([51.505, -0.09], 13);


leaflet.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);