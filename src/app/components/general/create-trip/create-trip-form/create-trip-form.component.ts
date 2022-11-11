import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

import { BusLine, BusStop, TripCreateResult } from 'src/app/interfaces';
import { BusService } from 'src/app/services/bus.service';
import { MapService } from 'src/app/services/map.service';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-create-trip-form',
  templateUrl: './create-trip-form.component.html',
  styleUrls: ['./create-trip-form.component.sass']
})
export class CreateTripFormComponent implements OnInit {

  stops: BusStop[] = [];
  lines: BusLine[] = [];

  @Output() tripCreate = new EventEmitter<TripCreateResult>();

  get formControls() {
    return this.tripService.createTripForm.controls;
  }

  constructor(public tripService: TripService,
              private busService: BusService,
              private mapService: MapService) { }

  ngOnInit(): void {
    this.busService.getStops()
    .subscribe( result => this.stops = result );
  }

  handleBusStopSelect($event: MatSelectChange) {
    const selectedStop = $event.value as BusStop;
    this.busService.getLinesByStop(selectedStop)
    .subscribe( result => this.lines = result );

    this.formControls.stop.setValue(selectedStop!);

    if (selectedStop.location && selectedStop.location.coordinates) {
      this.mapService.setFocusTo(selectedStop);
    }
  }

  handleTripCreate(): void {
    if (!this.tripService.createTripForm.valid) return;

    this.tripService.createTrip().subscribe(
      createTripResult => {
        this.tripService.createTripForm.reset({});
        // poner un value en el reset porque si no no resetea
        this.tripCreate.emit(createTripResult);
      }
    );
  }

}
