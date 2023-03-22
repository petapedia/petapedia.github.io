import leaflet from 'https://cdn.skypack.dev/leaflet';



let map = L.map('map').setView([51.505, -0.09], 13);



L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Anda klik pada posisi : "+e.latlng[0] + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);