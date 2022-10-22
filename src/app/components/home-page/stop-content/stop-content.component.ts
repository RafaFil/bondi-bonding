import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { BusLine, BusStop, Trip } from 'src/app/interfaces';
import { TripService } from 'src/app/services/trip.service';
import { UserStopItemGroupComponent } from '../../general/stop-map/user-stop-item-group/user-stop-item-group.component';
import { StopContentHeaderComponent } from '../stop-content-header/stop-content-header.component';

@Component({
  selector: 'app-stop-content',
  templateUrl: './stop-content.component.html',
  styleUrls: ['./stop-content.component.sass']
})
export class StopContentComponent implements OnInit {

  trips: Trip[] = [];

  @Input() stop: BusStop = {};

  @ViewChild('userItemGroup')
  userItemGroup?: UserStopItemGroupComponent;

  @ViewChild('stopContentHeader')
  stopContentHeader?: StopContentHeaderComponent;

  constructor(private tripsService: TripService,
              private router: Router) {}

  ngOnInit(): void {  }

  clearSelectedUser(): void {
    this.userItemGroup?.clearSelectedTrip();
  }

  clear(): void {
    this.clearSelectedUser();
    this.stopContentHeader?.clear();
    this.trips = [];
  }

  handleLineChange(line: BusLine): void {
    this.clearSelectedUser();
    this.tripsService.getTripsByStopAndLine(this.stop, line)
      .subscribe(tripArr => this.trips = tripArr);
  }

  handleStartChat(trip: Trip): void {
    this.router.navigate([`/chat/${trip.user.uid}`]);
  }

}
