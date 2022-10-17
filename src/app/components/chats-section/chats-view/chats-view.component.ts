import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/Chat';

@Component({
  selector: 'app-chats-view',
  templateUrl: './chats-view.component.html',
  styleUrls: ['./chats-view.component.sass']
})
export class ChatsViewComponent implements OnInit {

  temporalChats : Chat[] = [];

  friendsChats : Chat[] = [];

  unrededTemporalChats !: string;
  unrededFriendasChats !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
