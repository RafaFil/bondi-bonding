import { ChatMessage } from 'src/app/modules/core/interfaces/ChatMessage';
import { User } from './User';

export interface Chat{
    id: string;
    from?: User;
    to?: User;
    chatMessages?: ChatMessage[];
    permanent?: boolean;
}
