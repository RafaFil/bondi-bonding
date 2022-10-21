import { BusLine } from "./BusLine";
import { GeoPoint } from "./GeoPoint";

export interface BusStop {
  busstopId?: number,
  street1?: string,
  street2?: string,
  location?: GeoPoint
}
