import { Trip } from './Trip';

export interface TripCreateResult {
  data?: Trip;
  success: boolean;
  message?: string;
}
