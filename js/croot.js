import {map} from './config/peta.js';
import {onClosePopupClick,onSubmitPopupClick,onMapClick,onMapPointerMove} from './controller/popup.js';
import {onClick} from 'https://jscroot.github.io/element/croot.js';

onClick('popup-closer',onClosePopupClick);
onClick('cogbutton',onSubmitPopupClick);
map.on('singleclick', onMapClick);
map.on('pointermove', onMapPointerMove);