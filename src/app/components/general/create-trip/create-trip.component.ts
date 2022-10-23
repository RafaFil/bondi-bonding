import { Component, OnInit, ViewChild } from '@angular/core';
import { TripCreateResult } from 'src/app/interfaces';
import { SlidingSheetComponent } from '../sliding-sheet/sliding-sheet.component';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.component.html',
  styleUrls: ['./create-trip.component.sass']
})
export class CreateTripComponent implements OnInit {

  @ViewChild('createTripSheet')
  slidingSheet?: SlidingSheetComponent;

  constructor() { }

  ngOnInit(): void {
  }

  displayCreateTripForm($event: Event) {
    this.slidingSheet?.show($event);
  }

  handleTripCreate(tripCreateResult: TripCreateResult) {
    console.log(tripCreateResult);
    this.slidingSheet?.hide();
  }

}
