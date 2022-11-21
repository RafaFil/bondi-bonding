import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { TripFilters, Trip, BusStop, BusLine, TripCreateResult } from 'src/app/modules/core/interfaces';
import { MOCKED_TRIPS } from 'src/app/modules/core/mocks';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  createTripForm = this.fb.group({
    from: [ '', Validators.required ],
    to: [ '', Validators.required ],
    busLine: new FormControl<BusLine>({}, Validators.required),
    schedule: [ '', Validators.required ],
    description: [ '', Validators.maxLength(100) ],
    stop: new FormControl<BusStop>({}, Validators.required),
    filters: new FormControl<TripFilters>({}),
    clickedBond: false
  });

  constructor(private fb: FormBuilder,
              private authService: AuthService) { }

  createTrip(): Observable<TripCreateResult> {
    const formRawValue = this.createTripForm.getRawValue();

    const newTrip: Trip = {
      busLineId: formRawValue.busLine!.lineId!,
      from: formRawValue.from!,
      schedule: formRawValue.schedule!,
      stopId: formRawValue.stop!.busstopId!,
      to: formRawValue.to!,
      userId: this.authService.runningUser!.uid!,
      description: formRawValue.description ? formRawValue.description : '',
      filters: formRawValue.filters!
    };

    return of({ success: true });
  }

  getTripsByStopAndLine(stop: BusStop, line: BusLine): Observable<Trip[]> {
    return of(MOCKED_TRIPS);
  }
}
