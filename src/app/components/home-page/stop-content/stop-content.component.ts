import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { BusStop, Trip } from 'src/app/interfaces';
import { TripService } from 'src/app/services/trip.service';
import { UserStopItemGroupComponent } from '../../general/stop-map/user-stop-item-group/user-stop-item-group.component';

@Component({
  selector: 'app-stop-content',
  templateUrl: './stop-content.component.html',
  styleUrls: ['./stop-content.component.sass']
})
export class StopContentComponent implements OnInit, OnChanges {
  trips: Trip[] = [];

  @Input() stop?: BusStop;

  @ViewChild('userItemGroup')
  userItemGroup?: UserStopItemGroupComponent;

  constructor(private tripsService: TripService) {}

  ngOnInit(): void {  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['stop'];
    if (change.currentValue !== change.previousValue) this.handleStopChange();
  }

  handleStopChange() {
    if (!this.stop) {
      this.userItemGroup?.clearSelectedUser();
      return;
    }

    this.tripsService.getTripsByStop(this.stop)
      .subscribe(tripArr => this.trips = tripArr);
  }

  handleStartChat(trip: Trip) {
    console.log(trip);
  }

  // on line change query trips with new line
  // rewrite trip service to do trips by line
  // trips are related to lines and bus stops
}
