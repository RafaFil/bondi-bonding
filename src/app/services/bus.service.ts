import { StopsResponse } from './../interfaces/StopsResponse';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { LocationService } from './location.service';
import { MapService } from 'src/app/services/map.service';
import { MOCKED_LINES } from 'src/app/mocks';
import { BusLine, BusStop } from 'src/app/interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const STOPS_ENDPOINT = `${environment.baseUrl}/stops`;
const STOPS_GEO_ENDPOINT = `${environment.baseUrl}/stops/geo`;

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private selectedStop?: BusStop;

  constructor(private mapService: MapService,
              private locationService: LocationService,
              private http: HttpClient) { }

  getStops(useLocation?: boolean): Observable<StopsResponse>  {
    const center = this.mapService.getCenter();

    let url = STOPS_ENDPOINT;
    if (useLocation) {
      url = `${STOPS_GEO_ENDPOINT}?lat=${center![0]}&long=${center![1]}`;
    }
    return this.http.get<StopsResponse>(url);
  }

  getStopsCallback(callbackFn: (res: StopsResponse) => void, useLocation?: boolean): void {
    this.locationService.getCurrentPosition(({ coords }) => {
      const { longitude, latitude } = coords;

      let url = STOPS_ENDPOINT;
      if (useLocation) {
        url = `${STOPS_GEO_ENDPOINT}?lat=${latitude}&long=${longitude}`;
      }

      this.http.get<StopsResponse>(url)
      .subscribe(result => {
        callbackFn(result);
      });
    });
  }

  setSelectedStop(busStop: BusStop | undefined): void {
    this.selectedStop = busStop;
  }

  getSelectedStop(): BusStop | undefined {
    return this.selectedStop;
  }

  getLinesByStop(busStop: BusStop): Observable<BusLine[]> {
    return of(MOCKED_LINES);
  }
}
