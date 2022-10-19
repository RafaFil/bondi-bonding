import { Component, OnInit } from '@angular/core';
import {ChatMessage} from '../../../interfaces/ChatMessage'

@Component({
  selector: 'app-chat-feed-input',
  templateUrl: './chat-feed-input.component.html',
  styleUrls: ['./chat-feed-input.component.sass']
})
export class ChatFeedInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitChat(msgTxt : string){
    const msg : ChatMessage = {
      msg_text : msgTxt, fromYou: true, msg_date: new Date()};
      // do the submit
  }

}
