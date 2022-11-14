import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Chat, ChatMessage, ChatsInfo } from '../interfaces';
import { SendMessageResult } from '../interfaces/SendMessageResult';
import { MOCKED_CHAT, MOCKED_CHATS_INFO, MOCKED_SEND_MESSAGE_RESULT } from '../mocks/chat.mock';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  mockedChatsInfo = MOCKED_CHATS_INFO;
  mockedChat = MOCKED_CHAT;
  mockedResult = MOCKED_SEND_MESSAGE_RESULT;

  constructor() { }

  getChatbyId(chatId : string): Observable<Chat> {
    return of(MOCKED_CHAT);
  }

  getChatPreviews(): Observable<ChatsInfo> {
    return of(this.mockedChatsInfo);
  }

  sendMessage(message: ChatMessage): Observable<SendMessageResult> {
    this.mockedChat.chatMessages!.push(message);
    return of( this.mockedResult );
  }

}
