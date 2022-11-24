import { Trip } from './Trip';

export interface SearchResult {
  data?: Trip[];
  success: boolean;
  message?: string;
}
