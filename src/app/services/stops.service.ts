import { BusStop } from './../interfaces/BusStop';
import { Injectable } from '@angular/core';

import { MOCKED_STOPS } from './../mocks/stops.mock';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StopsService {
  private selectedStop?: BusStop;

  constructor() { }

  getStops(): Observable<BusStop[]> {
    return of(MOCKED_STOPS);
  }

  setSelectedStop(busStop: BusStop | undefined): void {
    this.selectedStop = busStop;
  }

  getSelectedStop(): BusStop | undefined {
    return this.selectedStop;
  }
}
