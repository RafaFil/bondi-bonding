import { Component, Input, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/interfaces/ChatMessage';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.sass']
})
export class ChatFeedComponent implements OnInit {

  @Input() messages: ChatMessage[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
