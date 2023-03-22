import {fromLonLat} from 'https://petapedia.github.io/ol/v7.3.0/proj.js';
import {toStringHDMS} from 'https://petapedia.github.io/ol/v7.3.0/coordinate.js';
import {overlay} from '../config/peta.js';
import {clickpopup} from '../template/popup.js';
import {setInner,textBlur,onClick, getValue,setValue} from 'https://jscroot.github.io/element/croot.js';
import { postWithToken } from "https://jscroot.github.io/api/croot.js";

export function onClosePopupClick() {
    overlay.setPosition(undefined);
    textBlur('popup-closer');
    return false;
}

function afterSubmitCOG(result){
    console.log(result);
}

export function onSubmitPopupClick() {
    let long = getValue('long');
    let lat = getValue('lat');
    let volume = getValue('volume');
    let data = {long,lat,volume};
    postWithToken("https://eoqc0wqfm9sjc6y.m.pipedream.net","Token","dsf9ygf87h98u479y98dj0fs89nfd7",data,afterSubmitCOG);
    overlay.setPosition(undefined);
    textBlur('popup-closer');
    return false;
}

export function onMapClick(evt) {
    const coordinate = evt.coordinate;
    let tile = fromLonLat(coordinate);
    let msg = clickpopup.replace("#LONG#",coordinate[0]).replace("#LAT#",coordinate[1]).replace('#X#',tile[0]).replace('#Y#',tile[1]).replace('#HDMS#',toStringHDMS(coordinate));
    setInner('popup-content',msg);
    setValue('long',coordinate[0]);
    setValue('lat',coordinate[1]);
    overlay.setPosition(coordinate);
}