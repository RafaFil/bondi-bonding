import { Component, OnInit } from '@angular/core';

import { SearchResult } from 'src/app/modules/core/interfaces';
import { HomeButtonsService } from 'src/app/modules/core/services/home-buttons.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  searchResult?: SearchResult;

  constructor(private homeButtons: HomeButtonsService) { }

  ngOnInit(): void {
    this.homeButtons.showButtons = true;
  }
}
