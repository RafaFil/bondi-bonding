import { Injectable } from '@angular/core';
import { Map } from 'maplibre-gl';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  disableGeolocation: boolean = false;
  map?: Map;

  get hasGeolocation(): boolean {
    if (this.disableGeolocation) return false;
    if (navigator.geolocation) return true;
    return false;
  }

  constructor() {  }

  getCurrentPosition(
    handlePositionCallback: (p: GeolocationPosition) => void,
    handleErrorCallback?: (e: GeolocationPositionError) => void
    ) {
    if (!this.hasGeolocation) return;

    if (handleErrorCallback) {
      navigator.geolocation.getCurrentPosition(handlePositionCallback, handleErrorCallback);
    } else {
      navigator.geolocation.getCurrentPosition(
        handlePositionCallback,
        error => this.handlePositionError(error)
      );
    }
  }

  private handlePositionError(error: GeolocationPositionError) {
    if (error.code === error.PERMISSION_DENIED || error.code === error.POSITION_UNAVAILABLE) {
      this.disableGeolocation = true;
    }
  }
}
