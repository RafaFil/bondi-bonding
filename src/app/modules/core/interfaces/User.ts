import { TripFilters } from "./TripFilters";

export interface User {
  uid?: string;
  name?: string;
  username?: string;
  password?: string;
  birthdate?: string;
  gender?: string;
  phone?: string;
  email?: string;
  iconUrl?: string;
  description?: string;
  filters?: TripFilters;
}
