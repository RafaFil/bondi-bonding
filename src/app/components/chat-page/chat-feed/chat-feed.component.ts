import { Component, OnInit } from '@angular/core';
import { ChatMessage } from 'src/app/interfaces/ChatMessage';

@Component({
  selector: 'app-chat-feed',
  templateUrl: './chat-feed.component.html',
  styleUrls: ['./chat-feed.component.sass']
})
export class ChatFeedComponent implements OnInit {

  messages : ChatMessage[] = [
    {msg_text:"When we were young the future was so bright",fromYou:true},
    {msg_text:"woah-oh",fromYou:false},
    {msg_text:"The old neighborhood was so alive",fromYou:true},
    {msg_text:"woah-oh",fromYou:false},
    {msg_text:"And every kid on the whole damn street",fromYou:true},
    {msg_text:"woah-oh",fromYou:false},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
