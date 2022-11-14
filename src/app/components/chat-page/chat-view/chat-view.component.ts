import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat } from 'src/app/interfaces/Chat';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.sass']
})
export class ChatViewComponent implements OnInit {

  chat?: Chat;

  constructor(private chatService: ChatService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    const chatId = `${this.route.snapshot.paramMap.get('chatId')}`;
    this.chatService.getChatbyId(chatId)
    .subscribe(chat => this.chat = chat);
  }

}
