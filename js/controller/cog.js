import {map,idmarker} from '../config/peta.js';

export function getAllCoordinates(){
    let i=0;
    let sudahhapus=0;
    let pointlist = [];
    map.getLayers().forEach(layer => {
      if (i !== 0 && sudahhapus === 0) {
        layer.getSource().getFeatures().forEach( feature =>
          {
            let node = {
                id : feature.get('id'),
                name : feature.get('name'),
                volume : feature.get('volume'),
                xy : feature.get('geometry').flatCoordinates,
            }
            pointlist.push(node);
          }
        );
      }
      i++;
    });
    console.log(pointlist);
}