import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/modules/core/interfaces/Chat';
import { ChatsInfo } from 'src/app/modules/core/interfaces/ChatsInfo';
import { ChatService } from 'src/app/modules/core/services/chat.service';

@Component({
  selector: 'app-chats-view',
  templateUrl: './chats-view.component.html',
  styleUrls: ['./chats-view.component.sass']
})
export class ChatsViewComponent implements OnInit {

  chatsInfo: ChatsInfo = { temporalChats : [], permanentChats: [] };

  get temporalChats(): Chat[] {
    return this.chatsInfo.temporalChats;
  }

  get permanentChats(): Chat[] {
    return this.chatsInfo.permanentChats;
  }

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getChatPreviews()
    .subscribe(chatsInfo => {
      this.chatsInfo = chatsInfo;
    })
  }

}
