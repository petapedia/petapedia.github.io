import {map,overlay} from './config/peta.js';
import {fromLonLat} from 'https://petapedia.github.io/ol/v7.3.0/proj.js';
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
  let tile = fromLonLat(coordinate)
  let msg = clickpopup.replace("#LONG#",coordinate[0]).replace("#LAT#",coordinate[1]).replace('#TILE#',tile).replace('#HDMS#',toStringHDMS(coordinate));
  setInner('popup-content',msg);
  overlay.setPosition(coordinate);
});