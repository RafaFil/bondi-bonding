import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/Chat';
import { ChatsInfo } from 'src/app/interfaces/ChatsInfo';

@Component({
  selector: 'app-chats-view',
  templateUrl: './chats-view.component.html',
  styleUrls: ['./chats-view.component.sass']
})
export class ChatsViewComponent implements OnInit {

  chatUserInfo: ChatsInfo = {temporalChats : [], permanentChats: []}

  get temporalChats() : Chat[] {
    return this.chatUserInfo.temporalChats;
  }

  get permanentChats() : Chat[] {
    return this.chatUserInfo.permanentChats;
  }

  /*unrededTemporalChats !: string;
  unrededFriendasChats !: string;*/

  constructor() { }

  ngOnInit(): void {
  }



}
