import { BusLine } from './BusLine';
import { BusStop } from './BusStop';
import { TripFilters } from './TripFilters';
import { User } from './User';

export interface Trip {
  tripId?: string;
  userId: string;
  user?: User;
  from: string;
  to: string;
  busLine?: BusLine;
  busLineId: string;
  stopId: string;
  stop?: BusStop;
  schedule: string;
  description?: string;
  filters?: TripFilters;
}
