import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SearchService } from './../../../../services/search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {
  @Output() bondClick = new EventEmitter<MouseEvent>();

  get fromControl(): FormControl {
    return this.searchService.searchForm.controls.from;
  }

  get toControl(): FormControl {
    return this.searchService.searchForm.controls.to;
  }

  get clickedBondControl(): FormControl {
    return this.searchService.searchForm.controls.clickedBond;
  }

  constructor(public searchService: SearchService)
  { }

  ngOnInit(): void {
    this.clickedBondControl.setValue(false);
  }

  handleBondClick($event: MouseEvent) {
    this.clickedBondControl.setValue(true);
    this.bondClick.emit($event);
  }

}
