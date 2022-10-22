import { BusLine } from './BusLine';
import { BusStop } from './BusStop';
import { TripFilters } from './TripFilters';
import { User } from './User';

export interface Trip {
  tripId: string;
  user: User;
  from: string;
  to: string;
  busLine: BusLine;
  schedule: string;
  description?: string;
  filters?: TripFilters;
  stop?: BusStop;
}
