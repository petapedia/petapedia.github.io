import Map from 'https://petapedia.github.io/openlayers/src/ol/Map';
import View from 'https://petapedia.github.io/openlayers/src/ol/View';
import TileLayer from 'https://petapedia.github.io/openlayers/src/ol/layer/Tile';
import XYZ from 'https://petapedia.github.io/openlayers/src/ol/source/XYZ';

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
    center: [0, 0],
    zoom: 2
  })
});