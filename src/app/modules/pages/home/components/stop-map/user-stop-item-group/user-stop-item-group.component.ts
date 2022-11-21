import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Trip } from 'src/app/modules/core/interfaces';

@Component({
  selector: 'app-user-stop-item-group',
  templateUrl: './user-stop-item-group.component.html',
  styleUrls: ['./user-stop-item-group.component.sass']
})
export class UserStopItemGroupComponent implements OnInit {

  selectedTrip?: Trip;

  @Input() trips!: Trip[];

  @Output() tripChange = new EventEmitter<Trip>();

  constructor() { }

  ngOnInit(): void {
  }

  handleSelectedTrip(trip: Trip) {
    this.selectedTrip = trip;
    this.tripChange.emit(trip);
  }

  clearSelectedTrip() {
    this.selectedTrip = undefined;
  }

}
