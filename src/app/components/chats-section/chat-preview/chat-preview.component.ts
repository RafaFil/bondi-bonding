import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/Chat';
import { ChatMessage } from 'src/app/interfaces/ChatMessage';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.sass']
})
export class ChatPreviewComponent implements OnInit {

  @Input() chat !: Chat;

  userName: string = "";
  lastMessage!: ChatMessage

  getUserName(){

  }

  getlastChat () {

  };

  constructor() { }

  ngOnInit(): void {
  }

}
