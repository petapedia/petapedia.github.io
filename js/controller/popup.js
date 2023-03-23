import {toLonLat} from 'https://cdn.skypack.dev/ol/proj.js';
import {toStringHDMS} from 'https://cdn.skypack.dev/ol/coordinate.js';
import {overlay,map} from '../config/peta.js';
import {clickpopup} from '../template/popup.js';
import {cogMarker} from './marker.js';
import {setInner,textBlur,onClick, getValue,setValue} from 'https://jscroot.github.io/element/croot.js';
import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import {map} from '../config/peta.js';


export function onClosePopupClick() {
    overlay.setPosition(undefined);
    textBlur('popup-closer');
    //return false;
}

export function onSubmitPopupClick() {
    let long = getValue('long');
    let lat = getValue('lat');
    let volume = getValue('volume');
    let data = {long,lat,volume};
    postWithToken("https://eoqc0wqfm9sjc6y.m.pipedream.net","Token","dsf9ygf87h98u479y98dj0fs89nfd7",data,afterSubmitCOG);
    overlay.setPosition(undefined);
    textBlur('popup-closer');
    cogMarker(long,lat);
    //return false;
}

function afterSubmitCOG(result){
    console.log(result);
}

export function onMapClick(evt) {
    const tile = evt.coordinate;
    let coordinate = toLonLat(tile);
    let msg = clickpopup.replace("#LONG#",coordinate[0]).replace("#LAT#",coordinate[1]).replace('#X#',tile[0]).replace('#Y#',tile[1]).replace('#HDMS#',toStringHDMS(coordinate));
    setInner('popup-content',msg);
    setValue('long',coordinate[0]);
    setValue('lat',coordinate[1]);
    overlay.setPosition(tile);
}

function onMapPointerMove(evt) {
    var feature = map.forEachFeatureAtPixel(evt.pixel, function (feat, layer) {
        return feat;
    }
    );

    if (feature && feature.get('type') == 'Point') {
        var coordinate = evt.coordinate;    //default projection is EPSG:3857 you may want to use ol.proj.transform

        content.innerHTML = feature.get('desc');
        popup.setPosition(coordinate);
    }
    else {
        popup.setPosition(undefined);

    }
}