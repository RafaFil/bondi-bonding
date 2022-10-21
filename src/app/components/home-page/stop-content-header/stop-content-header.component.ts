import { Component, Input, OnInit } from '@angular/core';
import { BusLine, BusStop } from 'src/app/interfaces';

@Component({
  selector: 'app-stop-content-header',
  templateUrl: './stop-content-header.component.html',
  styleUrls: ['./stop-content-header.component.sass']
})
export class StopContentHeaderComponent implements OnInit {
  clickedTime?: string;
  selectedLine?: BusLine;

  @Input() stop?: BusStop;

  constructor() {}

  ngOnInit(): void {
    const now = new Date();
    const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();

    this.clickedTime = `${now.getHours()}:${minutes}`;
  }

}
