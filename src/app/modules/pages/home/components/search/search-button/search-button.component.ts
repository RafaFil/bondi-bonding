import { Component, OnInit } from '@angular/core';
import { HomeButtonsService } from 'src/app/modules/core/services/home-buttons.service';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.sass']
})
export class SearchButtonComponent implements OnInit {

  get hideAnimationSelector(): '' | 'bb-hide-home-btn' {
    return this.homeButtonsService.showButtons ? '' : 'bb-hide-home-btn';
  }

  constructor(public homeButtonsService: HomeButtonsService) { }

  ngOnInit(): void {
  }

}
