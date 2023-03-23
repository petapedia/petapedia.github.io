import {map} from './config/peta.js';
import {onClosePopupClick,onSubmitPopupClick,onMapClick,onMapPointerMove,disposePopover} from './controller/popup.js';
import {onClick} from 'https://jscroot.github.io/element/croot.js';

onClick('popup-closer',onClosePopupClick);
onClick('cogbutton',onSubmitPopupClick);

map.on('click', onMapClick);
map.on('pointermove', onMapPointerMove);
map.on('movestart', disposePopover);
