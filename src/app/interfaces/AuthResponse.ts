import { User } from "./User"

export interface AuthResponse {
  success: boolean,
  message?: string,
  data?: {
    user: User,
    token: string
  }
}
