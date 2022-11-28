import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

import { catchError, Observable, of } from 'rxjs';

import { TripFilters, Trip, BusStop, BusLine, TripCreateResult, GetTripsResponse } from 'src/app/modules/core/interfaces';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const TRIPS_ENDPOINT = `${environment.baseUrl}/trips`;

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
              private authService: AuthService,
              private http: HttpClient) { }

  createTrip(): Observable<TripCreateResult> {
    const tripForm = this.createTripForm.value;

    const newTrip: Trip = {
      busLineId: tripForm.busLine!.lineId!,
      from: tripForm.from!,
      schedule: tripForm.schedule!,
      stopId: tripForm.stop!.busstopId!,
      to: tripForm.to!,
      userId: this.authService.runningUser!.uid!,
      description: tripForm.description ? tripForm.description : '',
      filters: tripForm.filters!
    };

    return this.http.post<TripCreateResult>(TRIPS_ENDPOINT, newTrip)
    .pipe(
      catchError( err => of(err))
    );
  }

  getTripsByStopAndLine(stopId: string, lineId: string): Observable<GetTripsResponse> {
    const uid = this.authService.runningUser!.uid;
    const url = `${TRIPS_ENDPOINT}?stopId=${stopId}&busLineId=${lineId}&userId=${uid}`;

    return this.http.get<GetTripsResponse>(url)
    .pipe(
      catchError( err => of(err))
    );
  }
}
