import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BusStop } from 'src/app/interfaces/BusStop';

@Component({
  selector: 'app-bus-stop',
  templateUrl: './bus-stop.component.html',
  styleUrls: ['./bus-stop.component.sass']
})
export class BusStopComponent implements OnInit {
  @Input() busStop?: BusStop

  @Output() busSelectedEvent = new EventEmitter<BusStop>();

  constructor() { }

  ngOnInit(): void {
  }

  selectStop(): void {
    if (this.busStop) {
      this.busSelectedEvent.emit(this.busStop);
    }
  }
}
