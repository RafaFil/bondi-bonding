import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

import { BusLine, BusStop, LinesResponse, StopsResponse, TripCreateResult, TripFilters } from 'src/app/modules/core/interfaces';
import { BusService } from 'src/app/modules/core/services/bus.service';
import { MapService } from 'src/app/modules/core/services/map.service';
import { TripService } from 'src/app/modules/core/services/trip.service';
import { FormGroupDirective } from '@angular/forms';

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
              private mapService: MapService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.setStops();
  }

  setStops(): void {
    this.busService.getStops(true, 5000)
    .subscribe( (result: StopsResponse) => {
      if (result.success) {
        this.stops = result.data!
      } else {
        this.snackBar.open('An error ocurred while retrieving bus stops. Please reload this page or try again later.',
            '', { duration: 3000 });
      }
    });
  }

  handleBusStopSelect($event: MatSelectChange) {
    const selectedStop = $event.value as BusStop;

    this.busService.getLinesByStop(selectedStop.busstopId!)
    .subscribe((response: LinesResponse) => {
      if (response.success) {
        this.lines = response.data!;
      } else {
        this.snackBar.open(`There has been an error while retrieving bus lines. Please try again later.`, '', {
          duration: 3000
        });
      }
    });

    this.formControls.stop.setValue(selectedStop!);

    if (selectedStop.location && selectedStop.location.coordinates) {
      this.mapService.setFocusTo(selectedStop);
    }
  }

  handleTripCreate(formDirective: FormGroupDirective): void {
    if (!this.tripService.createTripForm.valid) return;

    this.tripService.createTrip().subscribe(
      createTripResult => {
        if (createTripResult.success) {
          formDirective.resetForm();
          this.tripService.createTripForm.reset({});
        }
        this.tripCreate.emit(createTripResult);
      }
    );
  }

}
