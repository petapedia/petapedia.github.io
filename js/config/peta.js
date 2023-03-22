import Map from 'https://petapedia.github.io/ol/v7.3.0/Map.js';
import View from 'https://petapedia.github.io/ol/v7.3.0/View.js';
import TileLayer from 'https://petapedia.github.io/ol/v7.3.0/layer/Tile.js';
import XYZ from 'https://petapedia.github.io/ol/v7.3.0/source/XYZ.js';
import OSM from 'https://petapedia.github.io/ol/v7.3.0/source/OSM.js';
import {fromLonLat} from 'https://petapedia.github.io/ol/v7.3.0/proj.js';
import Overlay from 'https://petapedia.github.io/ol/v7.3.0/Overlay.js';
import {container} from 'https://jscroot.github.io/element/croot.js';

const attributions = '<a href="https://petapedia.github.io/" target="_blank">&copy; PetaPedia Indonesia</a> ';

const place = [107.13563336552649,-6.8165156551551505];

const basemap = new TileLayer({
  source: new OSM({attributions: attributions,}),
});

const defaultstartmap = new View({
  center: fromLonLat(place),
  zoom: 9,
});

export const overlay = new Overlay({
    element: container('popup'),
    autoPan: {
      animation: {
        duration: 250,
      },
    },
  });

export let map = new Map({
  overlays: [overlay],
  target: 'map',
  layers: [
    basemap,
  ],
  view: defaultstartmap,
});