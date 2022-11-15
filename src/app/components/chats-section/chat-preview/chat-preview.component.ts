import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/Chat';
import { ChatMessage } from 'src/app/interfaces/ChatMessage';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.sass']
})
export class ChatPreviewComponent implements OnInit {

  @Input() chat!: Chat;

  get lastMessage(): ChatMessage | undefined {
    if (this.chat.chatMessages && this.chat.chatMessages?.length > 0) {
      return this.chat.chatMessages[this.chat.chatMessages.length - 1];
    }
    return undefined;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
