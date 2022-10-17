import { Trip } from './Trip';

export interface SearchResult {
  trips?: Trip[];
  foundTrips: boolean;
}
