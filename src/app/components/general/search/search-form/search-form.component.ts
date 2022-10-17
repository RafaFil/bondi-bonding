import { SearchService } from './../../../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {

  get fromControl(): FormControl {
    return this.searchService.searchForm.controls.from;
  }

  get toControl(): FormControl {
    return this.searchService.searchForm.controls.to;
  }

  get clickedBondControl(): FormControl {
    return this.searchService.searchForm.controls.clickedBond;
  }

  constructor(public searchService: SearchService,
              private bottomSheetRef: MatBottomSheetRef<SearchFormComponent>)
  { }

  ngOnInit(): void {
    this.clickedBondControl.setValue(false);
  }

  handleBondClick() {
    this.clickedBondControl.setValue(true);
    this.bottomSheetRef.dismiss();
  }

}
