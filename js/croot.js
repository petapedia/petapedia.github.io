import {map,overlay} from './config/peta.js';
import {toLonLat} from 'https://petapedia.github.io/ol/v7.3.0/proj.js';
import {toStringHDMS} from 'https://petapedia.github.io/ol/v7.3.0/coordinate.js';


const content = document.getElementById('popup-content');
const closer = document.getElementById('popup-closer');


closer.onclick = function () {
  overlay.setPosition(undefined);
  closer.blur();
  return false;
};

map.on('singleclick', function (evt) {
  const coordinate = evt.coordinate;
  const hdms = toStringHDMS(toLonLat(coordinate));

  content.innerHTML = '<p>You clicked here:</p><code>' + hdms + '</code>';
  overlay.setPosition(coordinate);
});