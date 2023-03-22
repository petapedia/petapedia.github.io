import {map,overlay} from './config/peta.js';
import {fromLonLat} from 'https://petapedia.github.io/ol/v7.3.0/proj.js';
import {toStringHDMS} from 'https://petapedia.github.io/ol/v7.3.0/coordinate.js';
import {clickpopup} from './template/popup.js';
import {onClosePopupClick,onSubmitPopupClick,onMapClick} from './controller/popup.js';
import {setInner,textBlur,onClick, getValue,setValue} from 'https://jscroot.github.io/element/croot.js';
import { postWithToken } from "https://jscroot.github.io/api/croot.js";



onClick('popup-closer',onClosePopupClick);
onClick('cogbutton',onSubmitPopupClick);

map.on('singleclick', onMapClick);