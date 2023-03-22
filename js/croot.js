import Map from 'https://petapedia.github.io/ol/v7.3.0/Map.js';
import View from 'https://petapedia.github.io/ol/v7.3.0/View.js';
import TileLayer from 'https://petapedia.github.io/ol/v7.3.0/layer/Tile.js';
import XYZ from 'https://petapedia.github.io/ol/v7.3.0/source/XYZ.js';

const tl = new TileLayer({
    source: new XYZ({
      url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
  });
const vw = new View({
    center: [ -6.7915964,107.2664323],
    zoom: 7
  });

new Map({
  target: 'map',
  layers: [
    tl
  ],
  view: vw
});