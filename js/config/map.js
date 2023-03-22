import leaflet from 'https://cdn.skypack.dev/leaflet';

export const map = leaflet.map('map').setView([-6.934675502378212-2.44565, 117.8888], 5);
          
export const tiles = leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.bukupedia.co.id/">Bukupedia University</a>'
}).addTo(map);