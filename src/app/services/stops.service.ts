import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MOCKED_STOPS } from 'src/app/mocks';
import { BusStop } from 'src/app/interfaces';

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
