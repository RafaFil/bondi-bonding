import { TripFilters } from './TripFilters';
import { User } from './User';

export interface Trip {
  tripId: string;
  user: User;
  from: string;
  to: string;
  description?: string;
  filters?: TripFilters
}
