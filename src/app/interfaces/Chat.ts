import {ChatMessage} from 'src/app/interfaces/ChatMessage';

export interface Chat{
    id: number;

    chatMessages?: ChatMessage[];

    permanent?: boolean;
}