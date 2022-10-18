import { FormBuilder, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';

import { TripFilters, Trip } from 'src/app/interfaces';

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
}
