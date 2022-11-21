import { MapService } from 'src/app/modules/core/services/map.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { BusStop, SearchResult } from 'src/app/modules/core/interfaces';
import { BusService } from 'src/app/modules/core/services/bus.service';

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
