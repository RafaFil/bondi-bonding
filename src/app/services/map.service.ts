import { LocationService } from './location.service';
import { Injectable } from '@angular/core';
import { EaseToOptions, Map } from 'maplibre-gl';
import { BusStop } from '../interfaces';

const ZOOM_LEVELS = {
  ZOOM_IN: 16,
  ACCURATE: 15,
  INACCURATE: 14,
  VERY_INACCURATE: 12,
  NO_LOCATION: 10
};

@Injectable({
  providedIn: 'root'
})
export class MapService {
  zoomLevels = ZOOM_LEVELS;
  map!: Map;

  constructor() { }

  easeTo (options: EaseToOptions) {
    this.map.easeTo(options);
  }

  setFocusTo(busStop: BusStop) {
    this.easeTo({
      center: [
        busStop.location!.coordinates![0],
        busStop.location!.coordinates![1] - 0.0015
      ],
      zoom: this.zoomLevels.ZOOM_IN
    });
  }

  getCenter(): [ number, number ] | undefined {
    if (this.map) {
      const { lng, lat } = this.map.getCenter();
      return [ lng, lat ];
    }

    return undefined;
  }

  getZoom(): number {
    return this.map.getZoom();
  }
}
