import Map from 'https://petapedia.github.io/ol/v7.3.0/Map.js';
import View from 'https://petapedia.github.io/ol/v7.3.0/View.js';
import TileLayer from 'https://petapedia.github.io/ol/v7.3.0/layer/Tile.js';
import XYZ from 'https://petapedia.github.io/ol/v7.3.0/source/XYZ.js';
import OSM from 'https://petapedia.github.io/ol/v7.3.0/source/OSM.js';
import {useGeographic} from 'https://petapedia.github.io/ol/v7.3.0/proj.js';

useGeographic();

const place = [107.13563336552649,-6.8165156551551505];

const basemap = new TileLayer({
  source: new OSM(),
});

const defaultstartmap = new View({
  center: place,
  zoom: 9,
});

const map = new Map({
  target: 'map',
  layers: [
    basemap,
  ],
  view: defaultstartmap,
});