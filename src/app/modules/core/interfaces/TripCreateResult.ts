import { Trip } from './Trip';

export interface TripCreateResult {
  trip?: Trip;
  success: boolean;
  errors?: string[];
}
