import { SearchFilters } from 'src/app/interfaces/SearchFilters';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchFilters?: SearchFilters;

  constructor() { }

  setSearchFilters(searchFilters: SearchFilters) {
    this.searchFilters = searchFilters;
  }

  search() {
    // TODO: Return mocked search data
  }
}
