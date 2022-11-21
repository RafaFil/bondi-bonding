import { BusStop } from 'src/app/modules/core/interfaces';

export interface StopsResponse {
  data?: BusStop[],
  success: boolean,
  message?: string
}
