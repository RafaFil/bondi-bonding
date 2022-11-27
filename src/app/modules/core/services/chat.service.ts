import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Chat, SendMessageResult } from '../interfaces';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

const CHATS_ENDPOINT = `${environment.baseUrl}/chat`;

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  getChatbyId(chatId : string): Observable<{
    success: boolean,
    data?: Chat
  }> {
    return this.http.get<{
      success: boolean,
      data?: Chat
    }>(`${CHATS_ENDPOINT}/${chatId}`)
    .pipe(
      catchError( err => of(err))
    );
  }

  getChatPreviews(): Observable<{
    success: boolean,
    data?: Chat[]
  }> {
    return this.http.get<{
      success: boolean,
      data?: Chat[]
    }>(CHATS_ENDPOINT)
    .pipe(
      catchError( err => of(err))
    );
  }

  getChatByMembers(toUsername: string): Observable<{
    success: boolean,
    data?: Chat
  }> {
    return this.http.get<{
      success: boolean,
      data?: Chat
    }>(`${CHATS_ENDPOINT}/member/${toUsername}`)
    .pipe(
      catchError( err => of(err))
    );
  }

  createChat(toUsername: string): Observable<{
    success: boolean,
    data?: string
  }> {
    return this.http.post<{
      success: boolean,
      data?: string
    }>(CHATS_ENDPOINT, { toUser: toUsername })
    .pipe(
      catchError( err => of(err))
    );
  }

  sendMessage(message: string, chatId: string): Observable<SendMessageResult> {
    return this.http.post<SendMessageResult>(`${CHATS_ENDPOINT}/${chatId}`,
      {
        sender: this.authService.runningUser?.username,
        message
      })
      .pipe(
        catchError( err => of(err))
      );
  }

  createPermanentChatRequest(chatId: string): Observable<any> {
    return of(undefined);
  }

  deleteChat(chatId: string): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${CHATS_ENDPOINT}/${chatId}`)
    .pipe(
      catchError( err => of(err))
    );
  }

}
