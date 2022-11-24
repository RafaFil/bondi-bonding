import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TripCreateResult } from 'src/app/modules/core/interfaces';
import { BusService } from 'src/app/modules/core/services/bus.service';
import { SlidingSheetComponent } from 'src/app/modules/shared/components/sliding-sheet/sliding-sheet.component';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.sass']
})
export class CreateTripComponent implements OnInit {

  @ViewChild('createTripSheet')
  slidingSheet?: SlidingSheetComponent;

  constructor(private busService: BusService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  displayCreateTripForm($event: Event) {
    this.slidingSheet?.show($event);
  }

  handleTripCreate(tripCreateResult: TripCreateResult) {
    let msg = '';
    if (tripCreateResult.success) {
      msg = 'Your trip has been created successfully!';
      this.slidingSheet?.hide();
    } else {
      msg = 'Sorry, there has been an error while creating your trip, please try again in a few minutes.';
    }
    this.snackBar.open(msg, '', { duration: 3000 });
  }

  handleSheetHide() {
    this.busService.setSelectedStop(undefined);
  }
}
