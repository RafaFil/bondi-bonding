import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Trip } from 'src/app/interfaces';

@Component({
  selector: 'app-user-stop-item',
  templateUrl: './user-stop-item.component.html',
  styleUrls: ['./user-stop-item.component.sass']
})
export class UserStopItemComponent implements OnInit {
  @Input() trip!: Trip;
  @Input() selectedTripId?: string;

  @Output() selectedUser = new EventEmitter<Trip>();

  get selectedItemClass(): 'bb-selected-user-item' | '' {
    return this.selectedTripId === this.trip.tripId ? 'bb-selected-user-item' : '';
  }

  get itemDescription(): string {
    return this.trip.description ? this.trip.description : this.trip.to;
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleUserSelect() {
    this.selectedUser.emit(this.trip);
  }

}
