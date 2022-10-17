import { Component, Input, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/Chat';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.sass']
})
export class ChatPreviewComponent implements OnInit {

  @Input() chat !: Chat;

  getUserName(){
    const username = ""; //get the username
    return username;
  }
  getlastChat () {
    return this.chat.chatMessages[this.chat.chatMessages.length-1]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
