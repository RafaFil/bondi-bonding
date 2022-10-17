import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

import { SearchResult } from './../../../interfaces/SearchResult';
import { SearchService } from './../../../services/search.service';
import { SlidingSheetComponent } from '../sliding-sheet/sliding-sheet.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<SearchResult>();

  @ViewChild(SlidingSheetComponent)
  slidingSheet?: SlidingSheetComponent;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  displaySearchForm($event: Event): void {
    this.slidingSheet?.show($event);
  }

  handleFormSubmit(): void {
    this.slidingSheet?.hide();
    const searchResult = this.searchService.search();
    if (!searchResult)  return;

    this.search.emit(searchResult);
  }
}
