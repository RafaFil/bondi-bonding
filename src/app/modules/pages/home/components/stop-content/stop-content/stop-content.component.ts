import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { BusLine, BusStop, Trip } from 'src/app/modules/core/interfaces';
import { ChatService } from 'src/app/modules/core/services/chat.service';
import { HomeButtonsService } from 'src/app/modules/core/services/home-buttons.service';
import { TripService } from 'src/app/modules/core/services/trip.service';
import { UserStopItemGroupComponent } from '../../stop-map/user-stop-item-group/user-stop-item-group.component';
import { StopContentHeaderComponent } from '../stop-content-header/stop-content-header.component';

@Component({
  selector: 'app-stop-content',
  templateUrl: './stop-content.component.html',
  styleUrls: ['./stop-content.component.sass']
})
export class StopContentComponent implements OnInit {

  trips: Trip[] = [];

  @Input() stop?: BusStop;

  @ViewChild('userItemGroup')
  userItemGroup?: UserStopItemGroupComponent;

  @ViewChild('stopContentHeader')
  stopContentHeader?: StopContentHeaderComponent;

  constructor(private tripsService: TripService,
              private chatService: ChatService,
              private homeBtns: HomeButtonsService,
              private snackBar: MatSnackBar,
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
    this.tripsService.getTripsByStopAndLine(this.stop!.busstopId!, line.lineId!)
      .subscribe(response => {
        if (response.success) {
          this.trips = response.data!;
        }
      });
  }

  handleStartChat(trip: Trip): void {
    this.chatService.getChatByMembers(trip.user?.username!)
    .subscribe(result => {
      if (result.success) {
        this.homeBtns.showButtons = true;
        this.router.navigate([`/chat/${result.data!._id}`]);
        return;
      }

      this.chatService.createChat(trip.user?.username!)
      .subscribe(result => {
        if (result.success) {
          this.homeBtns.showButtons = true;
          this.router.navigate([`/chat/${result.data}`]);
          return;
        }

        this.snackBar.open(
          'An error ocurred while trying to start the chat. Please try again later.',
          '',
          { duration: 3000 }
        );
      });
    });
  }

}
