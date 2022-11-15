import { ChatMessageContent } from "./ChatMessageContent";

export interface ChatMessage {
    content: ChatMessageContent;
    sentDate?: Date;
    fromId: string;
    toId: string;
}
