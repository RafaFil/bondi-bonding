import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TripCreateResult } from 'src/app/interfaces';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-create-trip-form',
  templateUrl: './create-trip-form.component.html',
  styleUrls: ['./create-trip-form.component.sass']
})
export class CreateTripFormComponent implements OnInit {
  @Output() tripCreate = new EventEmitter<TripCreateResult>();

  get fromControl(): FormControl {
    return this.tripService.createTripForm.controls.from;
  }

  get toControl(): FormControl {
    return this.tripService.createTripForm.controls.to;
  }

  constructor(public tripService: TripService)
  { }

  ngOnInit(): void {
  }

  handleTripCreate() {
    this.tripService.createTrip().subscribe(
      createTripResult => {
        this.tripCreate.emit(createTripResult);
      }
    );
  }
}
