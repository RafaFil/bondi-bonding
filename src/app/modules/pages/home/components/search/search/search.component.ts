import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

import { SearchResult } from 'src/app/modules/core/interfaces';
import { SearchService } from 'src/app/modules/core/services/search.service';
import { SlidingSheetComponent } from 'src/app/modules/shared/components/sliding-sheet/sliding-sheet.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {

  @Output() search = new EventEmitter<SearchResult>();

  @ViewChild('searchSheet')
  slidingSheet?: SlidingSheetComponent;

  constructor(private searchService: SearchService) { }

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
    if (!searchResult.success)  return;

    this.slidingSheet?.hide();
    this.search.emit(searchResult);
  }

  handleSheetHide() {
    this.searchService.searchForm.reset();
  }
}
