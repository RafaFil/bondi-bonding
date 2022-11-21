import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

import { BusLine, BusStop, LinesResponse, Trip } from 'src/app/modules/core/interfaces';
import { BusService } from 'src/app/modules/core/services/bus.service';

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

  constructor(private busService: BusService,
              private snackBar: MatSnackBar) {}

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

    this.busService.getLinesByStop(this.stop.busstopId!)
    .subscribe((response: LinesResponse) => {
      if (response.success) {
        this.busLines = response.data!;
      } else {
        this.snackBar.open(`There has been an error while retrieving bus lines. Please try again later.`, '', {
          duration: 3000
        });
      }
    });
  }

  handleLineSelect($event: MatSelectChange) {
    this.lineSelect.emit($event.value);
  }
}
