import { BusLine } from "./BusLine";

export interface LinesResponse {
  data?: BusLine[],
  message?: string,
  success: boolean
}
