import { Trip } from "./Trip";

export interface GetTripsResponse {
  success: boolean,
  message?: string,
  data?: Trip[]
}
