import Feature from 'https://petapedia.github.io/ol/v7.3.0/Feature.js';
import Point from 'https://petapedia.github.io/ol/v7.3.0/geom/Point.js';
import VectorSource from 'https://petapedia.github.io/ol/v7.3.0/source/Vector.js';
import {Vector as VectorLayer} from 'https://petapedia.github.io/ol/v7.3.0/layer.js';

import {Icon, Style} from 'https://petapedia.github.io/ol/v7.3.0/style.js';

export function cogMarker(long,lat){
    const marker = new Feature({
        type: 'icon',
        geometry: new Point(fromLonLat([long, lat])),
    });
    marker.setStyle(
        new Style({
          image: new Icon({
            anchor: [0.5, 1],
            src: 'img/icon.png',
          }),
        })
      );
    const vectorSource = new VectorSource({
        features: [marker],
    });
    
    const vectorLayer = new VectorLayer({
    source: vectorSource,
    });
    map.addLayer(vectorLayer);
}