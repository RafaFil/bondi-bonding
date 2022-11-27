
export interface SendMessageResult {
  success: boolean,
  data?: string
  error?: {
    message: string;
  }
}
