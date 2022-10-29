import { Injectable } from '@angular/core';
import { Map } from 'maplibre-gl';

const API_KEY = 'DQvXkvmrVoZGslcrdv5i'; // MOVE TO BACKEND OR ENVIRONMENTS

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

  getStyleUrl(): string {
    return `https://api.maptiler.com/maps/outdoor/style.json?key=${API_KEY}`;
  }

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
