import Map from 'https://petapedia.github.io/openlayers/src/ol/Map.js';
import View from 'https://petapedia.github.io/openlayers/src/ol/View.js';
import TileLayer from 'https://petapedia.github.io/openlayers/src/ol/layer/Tile.js';
import XYZ from 'https://petapedia.github.io/openlayers/src/ol/source/XYZ.js';

new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
    })
  ],
  view: new View({
    center: [ -6.791596499041266,107.26643239610655],
    zoom: 9
  })
});