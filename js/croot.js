import {map} from './config/peta.js';
import {onClosePopupClick,onSubmitPopupClick,onMapClick} from './controller/popup.js';

onClick('popup-closer',onClosePopupClick);
onClick('cogbutton',onSubmitPopupClick);
map.on('singleclick', onMapClick);