import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Chat, ChatMessage } from '../interfaces';
import { SendMessageResult } from '../interfaces/SendMessageResult';
import { MOCKED_CHAT, MOCKED_SEND_MESSAGE_RESULT } from '../mocks/chat.mock';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  mockedChat = MOCKED_CHAT;
  mockedResult = MOCKED_SEND_MESSAGE_RESULT;

  constructor() { }

  getChatbyId(chatId : string): Observable<Chat> {
    return of(MOCKED_CHAT);
  }

  getChatPreviews(): Observable<Chat[]> {
    return of([ this.mockedChat ]);
  }

  sendMessage(message: ChatMessage): Observable<SendMessageResult> {
    this.mockedChat.chatMessages!.push(message);
    return of( this.mockedResult );
  }

}
