import { Component, Input, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';

import { BusStop } from 'src/app/interfaces';
import { BusService } from '../../../../services/bus.service';

@Component({
  selector: 'app-bus-stop',
  templateUrl: './bus-stop.component.html',
  styleUrls: ['./bus-stop.component.sass']
})
export class BusStopComponent implements OnInit {
  @Input() busStop?: BusStop;
  @Input() showIcon: boolean = true;

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
