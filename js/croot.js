import {map,overlay} from './config/peta.js';
import {toLonLat} from 'https://petapedia.github.io/ol/v7.3.0/proj.js';
import {toStringHDMS} from 'https://petapedia.github.io/ol/v7.3.0/coordinate.js';
import {clickpopup} from './template/popup.js';
import {setInner,textBlur,onClick} from 'https://jscroot.github.io/element/croot.js';


function onClosePopupClick() {
  overlay.setPosition(undefined);
  textBlur('popup-closer');
  return false;
}

onClick('popup-closer',onClosePopupClick);

map.on('singleclick', function (evt) {
  const coordinate = evt.coordinate;
  //const hdms = toStringHDMS(toLonLat(coordinate));
  let msg = clickpopup.replace("#LONG#",coordinate[0]).replace("#LAT#",coordinate[2]).replace('#HDMS#',toStringHDMS(coordinate));
  setInner('popup-content',msg);
  //content.innerHTML = '<p>Posisi anda:</p><code>' + coordinate + '</code>';
  overlay.setPosition(coordinate);
});