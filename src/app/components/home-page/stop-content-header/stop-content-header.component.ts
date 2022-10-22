import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';

import { BusLine, BusStop, Trip } from 'src/app/interfaces';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-stop-content-header',
  templateUrl: './stop-content-header.component.html',
  styleUrls: ['./stop-content-header.component.sass']
})
export class StopContentHeaderComponent implements OnInit {
  busLines: BusLine[] = [];

  clickedTime: string = '';

  @Input() readOnlyLine?: BusLine;
  @Input() selectedTrip?: Trip;
  @Input() stop: BusStop = {};

  @Output() lineSelect = new EventEmitter<BusLine>();

  @ViewChild('lineSelect')
  lineSelectElement?: MatSelect;

  get tripTime(): string {
    if (this.readOnlyLine && this.selectedTrip) {
      return this.selectedTrip.schedule;
    }
    return this.clickedTime;
  }

  constructor(private busService: BusService) {}

  ngOnInit(): void {
    this.setClickedTime();
    this.setBusLines();
  }

  clear(): void {
    if (!this.lineSelectElement) return;
    this.lineSelectElement.value = undefined;
  }

  setClickedTime() {
    const now = new Date();
    const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
    const hours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
    this.clickedTime = `${hours}:${minutes}`;
  }

  setBusLines() {
    if (this.readOnlyLine) return;

    this.busService.getLinesByStop(this.stop)
    .subscribe(lineArr => this.busLines = lineArr);
  }

  handleLineSelect($event: MatSelectChange) {
    this.lineSelect.emit($event.value);
  }
}
