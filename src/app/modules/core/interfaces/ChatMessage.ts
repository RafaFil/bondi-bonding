import { ChatMessageContent } from "./ChatMessageContent";

export interface ChatMessage {
    message: string;
    sender: string;
    date: Date;
}
