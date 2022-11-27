import { ChatMessage } from 'src/app/modules/core/interfaces/ChatMessage';
import { User } from './User';

export interface Chat {
    _id: string;
    members: [ User, User ];
    messages?: ChatMessage[];
}
