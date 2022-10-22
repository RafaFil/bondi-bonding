import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MOCKED_STOPS } from 'src/app/mocks';
import { BusLine, BusStop } from 'src/app/interfaces';
import { MOCKED_LINES } from '../mocks/lines.mock';

@Injectable({
  providedIn: 'root'
})
export class BusService {
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

  getLinesByStop(busStop: BusStop): Observable<BusLine[]> {
    return of(MOCKED_LINES);
  }
}
