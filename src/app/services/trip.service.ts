import { FormBuilder, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { TripFilters, Trip, BusStop, BusLine } from 'src/app/interfaces';
import { MOCKED_TRIPS } from 'src/app/mocks';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  createTripForm = this.fb.group({
    from: [ '' ],
    to: [ '' ],
    description: [ '' ],
    filters: new FormControl<TripFilters>({}),
    clickedBond: false
  });

  constructor(private fb: FormBuilder) { }

  createTrip(): Trip | undefined {
    this.createTripForm.reset();
    return;
  }

  getTripsByStopAndLine(stop: BusStop, line: BusLine): Observable<Trip[]> {
    return of(MOCKED_TRIPS);
  }
}
