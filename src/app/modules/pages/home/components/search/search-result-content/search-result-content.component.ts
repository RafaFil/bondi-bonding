import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BusStop, SearchResult, Trip } from 'src/app/modules/core/interfaces';

@Component({
  selector: 'app-search-result-content',
  templateUrl: './search-result-content.component.html',
  styleUrls: ['./search-result-content.component.sass']
})
export class SearchResultContentComponent implements OnInit {
  selectedTrip?: Trip;

  @Input() searchResult!: SearchResult;

  @Output() stopChange = new EventEmitter<BusStop>;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleStartChat(trip: Trip): void {
    this.router.navigate([`/chat/${trip.userId}`]);
  }

  handleTripChange(newTrip: Trip) {
    this.selectedTrip = newTrip;
    this.stopChange.emit(newTrip.stop!);
  }
}
