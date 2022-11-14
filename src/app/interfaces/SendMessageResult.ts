
export interface SendMessageResult {
  sent: boolean,
  messageId?: string
  error?: {
    message: string;
  }
}
