import { Component, OnInit, ViewChild } from '@angular/core';
import { TripCreateResult } from 'src/app/interfaces';
import { BusService } from 'src/app/services/bus.service';
import { SlidingSheetComponent } from '../sliding-sheet/sliding-sheet.component';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.sass']
})
export class CreateTripComponent implements OnInit {

  @ViewChild('createTripSheet')
  slidingSheet?: SlidingSheetComponent;

  constructor(private busService: BusService) { }

  ngOnInit(): void {
  }

  displayCreateTripForm($event: Event) {
    this.slidingSheet?.show($event);
  }

  handleTripCreate(tripCreateResult: TripCreateResult) {
    this.slidingSheet?.hide();
  }

  handleSheetHide() {
    this.busService.setSelectedStop(undefined);
  }
}
