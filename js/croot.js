import Map from 'https://petapedia.github.io/ol/v7.3.0/Map.js';
import View from 'https://petapedia.github.io/ol/v7.3.0/View.js';
import TileLayer from 'https://petapedia.github.io/ol/v7.3.0/layer/Tile.js';
import XYZ from 'https://petapedia.github.io/ol/v7.3.0/source/XYZ.js';
import OSM from 'https://petapedia.github.io/ol/v7.3.0/source/OSM.js';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [10, 10],
    zoom: 2,
  }),
});