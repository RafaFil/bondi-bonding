import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

import { SearchResult } from 'src/app/interfaces';
import { SearchService } from './../../../services/search.service';
import { SlidingSheetComponent } from '../sliding-sheet/sliding-sheet.component';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<SearchResult>();

  @ViewChild('searchSheet')
  slidingSheet?: SlidingSheetComponent;

  constructor(private searchService: SearchService,
              private busService: BusService) { }

  ngOnInit(): void {
  }

  displaySearchForm($event: Event): void {
    this.slidingSheet?.show($event);
  }

  handleFormSubmit(): void {
    this.searchService.search()
    .subscribe((searchResult: SearchResult) => this.handleSearchResult(searchResult));
  }

  handleSearchResult(searchResult: SearchResult) {
    if (!searchResult.foundTrips)  return;

    this.slidingSheet?.hide();
    this.search.emit(searchResult);
  }
}
