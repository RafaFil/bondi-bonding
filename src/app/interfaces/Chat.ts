import { ChatMessage } from 'src/app/interfaces/ChatMessage';
import { User } from './User';

export interface Chat{
    id: string;
    fromId?: string;
    toId?: string;
    from?: User;
    to?: User;
    chatMessages?: ChatMessage[];
    permanent?: boolean;
}
