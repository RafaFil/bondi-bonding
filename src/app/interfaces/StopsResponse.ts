import { BusStop } from 'src/app/interfaces';

export interface StopsResponse {
  data?: BusStop[],
  success: boolean,
  message?: string
}
