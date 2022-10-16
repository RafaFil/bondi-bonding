import { StopsService } from '../../../../services/stops.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BusStop } from 'src/app/interfaces/BusStop';

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

  constructor(private stopsService: StopsService) {  }

  ngOnInit(): void {
  }

  selectStop($event: Event): void {
    $event.stopPropagation();

    if (this.busStop) {
      this.stopClick.emit(this.busStop);
    }
  }
}
