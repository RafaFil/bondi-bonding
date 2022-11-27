import { Component, OnInit } from '@angular/core';

import { SearchResult } from 'src/app/modules/core/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  searchResult?: SearchResult;

  constructor() { }

  ngOnInit(): void { }
}
