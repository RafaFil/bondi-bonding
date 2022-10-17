import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SearchFormComponent } from './search-form/search-form.component';

import { SearchResult } from './../../../interfaces/SearchResult';
import { SearchService } from './../../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<SearchResult>();

  constructor(private bottomSheet: MatBottomSheet,
              private searchService: SearchService) { }

  ngOnInit(): void {
  }

  displaySearchForm(): void {
    const bottomSheetRef = this.bottomSheet.open(SearchFormComponent);

    bottomSheetRef.afterDismissed().subscribe(() => this.handleFormSubmit());
  }

  handleFormSubmit(): void {
    const searchResult = this.searchService.search();
    if (!searchResult)  return;

    this.search.emit(searchResult);
  }
}
