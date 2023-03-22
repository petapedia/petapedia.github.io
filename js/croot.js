import leaflet from 'https://cdn.skypack.dev/leaflet';
import {map} from './config/peta.js';




leaflet.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);