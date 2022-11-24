import { Component, Input, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

import { BusStop } from 'src/app/modules/core/interfaces';
import { BusService } from 'src/app/modules/core/services/bus.service';

@Component({
  selector: 'app-bus-stop',
  templateUrl: './bus-stop.component.html',
  styleUrls: ['./bus-stop.component.sass']
})
export class BusStopComponent implements OnInit {
  @Input() busStop?: BusStop;

  @Output() stopClick = new EventEmitter<BusStop>();

  get selectedStopSelector() {
    if (this.stopsService.getSelectedStop()?.busstopId === this.busStop?.busstopId) {
      return 'bb-selected-stop';
    }

    return '';
  }

  constructor(private stopsService: BusService,
              public elementRef: ElementRef) {  }

  ngOnInit(): void {
  }

  selectStop($event: Event): void {
    $event.stopPropagation();

    if (this.busStop) {
      this.stopClick.emit(this.busStop);
    }
  }
}
