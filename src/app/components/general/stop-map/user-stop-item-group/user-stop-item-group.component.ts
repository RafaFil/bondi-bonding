import { Component, OnInit, Input } from '@angular/core';

import { Trip } from 'src/app/interfaces';

@Component({
  selector: 'app-user-stop-item-group',
  templateUrl: './user-stop-item-group.component.html',
  styleUrls: ['./user-stop-item-group.component.sass']
})
export class UserStopItemGroupComponent implements OnInit {
  @Input() trips!: Trip[];
  selectedTrip?: Trip;

  constructor() { }

  ngOnInit(): void {
  }

  handleSelectedUser(trip: Trip) {
    this.selectedTrip = trip;
  }

}
