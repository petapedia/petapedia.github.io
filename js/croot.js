import {map,overlay} from './config/peta.js';
import {fromLonLat} from 'https://petapedia.github.io/ol/v7.3.0/proj.js';
import {toStringHDMS} from 'https://petapedia.github.io/ol/v7.3.0/coordinate.js';
import {clickpopup} from './template/popup.js';
import {setInner,textBlur,onClick, getValue} from 'https://jscroot.github.io/element/croot.js';
import { postWithToken } from "https://jscroot.github.io/api/croot.js";

function onClosePopupClick() {
  overlay.setPosition(undefined);
  textBlur('popup-closer');
  return false;
}

function afterSubmitCOG(result){
  console.log(result);
}

function onSubmitPopupClick() {
  let long = getValue('long');
  let lat = getValue('lat');
  let volume = getValue('volume');
  let data = {long,lat,volume};
  postWithToken("https://foo.bar","Token","dsf9ygf87h98u479y98dj0fs89nfd7",data,afterSubmitCOG);
  overlay.setPosition(undefined);
  textBlur('popup-closer');
  return false;
}

onClick('popup-closer',onClosePopupClick);
onClick('cogbutton',onSubmitPopupClick);

map.on('singleclick', function (evt) {
  const coordinate = evt.coordinate;
  let tile = fromLonLat(coordinate)
  let msg = clickpopup.replace("/#LONG#/g",coordinate[0]).replace("/#LAT#/g",coordinate[1]).replace('#X#',tile[0]).replace('#Y#',tile[1]).replace('#HDMS#',toStringHDMS(coordinate));
  setInner('popup-content',msg);
  overlay.setPosition(coordinate);
});