import { ElementRef } from "@angular/core";

export interface MapMarker {
  elementRef: ElementRef,
  coordinates: [ number, number ]
}
