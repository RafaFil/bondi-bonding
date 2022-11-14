import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/Chat';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.sass']
})
export class ChatViewComponent implements OnInit {

  chat?: Chat;

  @Input() chatId!: string;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getChatbyId(this.chatId)
    .subscribe(chat => this.chat = chat);
  }

}
