import { GeoPoint } from "./GeoPoint";

export interface BusStop {
  busstopId?: string,
  street1?: string,
  street2?: string,
  location?: GeoPoint
}
